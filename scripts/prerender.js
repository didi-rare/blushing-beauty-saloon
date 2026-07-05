import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { render, getPages } from '../dist-ssr/entry-server.js';

// Runs after the client and SSR builds:
//   vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node scripts/prerender.js
// Emits fully prerendered HTML for every route plus dist/sitemap.xml, so
// crawlers get complete content without executing JavaScript.

const DIST = './dist';
const SITE_URL = 'https://www.blushingbeauty.studio';

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

const escapeHtml = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// </script> inside JSON-LD would terminate the script tag early.
const jsonldScript = (obj) =>
    `<script type="application/ld+json">\n  ${JSON.stringify(obj, null, 2).replace(/</g, '\\u003c')}\n  </script>`;

function replaceOnce(html, regex, replacement, label, pagePath) {
    if (!regex.test(html)) {
        throw new Error(`prerender: template anchor "${label}" not found for ${pagePath}`);
    }
    return html.replace(regex, () => replacement);
}

function buildPage(appHtml, head, pagePath) {
    let html = template;

    // Swap the static hero shell for the full prerendered app.
    html = replaceOnce(
        html,
        /<div id="root">[\s\S]*<\/div>(?=\s*<\/body>)/,
        `<div id="root" data-prerendered="true">${appHtml}</div>`,
        'root div',
        pagePath,
    );

    if (!head) return html; // home page: index.html head is already correct

    const title = escapeHtml(head.title);
    const description = escapeHtml(head.description);

    html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, 'title', pagePath);
    html = replaceOnce(
        html,
        /<meta name="description"[\s\S]*?\/>/,
        `<meta name="description" content="${description}" />`,
        'meta description',
        pagePath,
    );
    html = replaceOnce(
        html,
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${head.url}" />`,
        'canonical',
        pagePath,
    );
    html = replaceOnce(
        html,
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${head.url}" />`,
        'og:url',
        pagePath,
    );
    html = replaceOnce(
        html,
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${title}" />`,
        'og:title',
        pagePath,
    );
    html = replaceOnce(
        html,
        /<meta property="og:description"[\s\S]*?\/>/,
        `<meta property="og:description" content="${description}" />`,
        'og:description',
        pagePath,
    );
    html = replaceOnce(
        html,
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${title}" />`,
        'twitter:title',
        pagePath,
    );
    html = replaceOnce(
        html,
        /<meta name="twitter:description"[\s\S]*?\/>/,
        `<meta name="twitter:description" content="${description}" />`,
        'twitter:description',
        pagePath,
    );

    // The home FAQ JSON-LD block becomes this page's Service/FAQ/Breadcrumb markup.
    html = replaceOnce(
        html,
        /<!-- Structured data: FAQ -->[\s\S]*?<\/script>/,
        `<!-- Structured data: page -->\n  ${head.jsonld.map(jsonldScript).join('\n  ')}`,
        'FAQ JSON-LD block',
        pagePath,
    );

    // The body <noscript> fallback duplicates home content; prerendered pages
    // already serve their full content without JS.
    html = replaceOnce(html, /(<body>\s*)<noscript>[\s\S]*?<\/noscript>\s*/, '$1', 'body noscript', pagePath);

    return html;
}

function lastCommitDate() {
    try {
        const date = execSync('git log -1 --format=%cs', { encoding: 'utf-8' }).trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
    } catch {
        // fall through to build date
    }
    return new Date().toISOString().slice(0, 10);
}

const pages = getPages();

for (const { path: pagePath, head } of pages) {
    const appHtml = render(pagePath);
    const html = buildPage(appHtml, head, pagePath);
    const outFile = path.join(DIST, pagePath, 'index.html');
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    console.log(`prerender: wrote ${outFile}`);
}

const lastmod = lastCommitDate();
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(({ path: pagePath }) => `    <url>
        <loc>${SITE_URL}${pagePath}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${pagePath === '/' ? '1.0' : '0.8'}</priority>
    </url>`)
    .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
console.log(`prerender: wrote dist/sitemap.xml (${pages.length} URLs, lastmod ${lastmod})`);
