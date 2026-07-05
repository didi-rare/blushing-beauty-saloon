import fs from 'fs';
import { execSync } from 'child_process';

// Runs after "vite build" and rewrites <lastmod> in dist/sitemap.xml only,
// so public/sitemap.xml stays a clean template in source control.
// lastmod reflects the last content change (latest git commit date), not the
// build date, falling back to today when git metadata is unavailable.

const SITEMAP = './dist/sitemap.xml';

function lastCommitDate() {
    try {
        const date = execSync('git log -1 --format=%cs', { encoding: 'utf-8' }).trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
    } catch {
        // fall through to build date
    }
    return new Date().toISOString().slice(0, 10);
}

if (!fs.existsSync(SITEMAP)) {
    console.error(`update-sitemap: ${SITEMAP} not found — run this after "vite build".`);
    process.exit(1);
}

const lastmod = lastCommitDate();
const xml = fs.readFileSync(SITEMAP, 'utf-8');
fs.writeFileSync(SITEMAP, xml.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${lastmod}</lastmod>`));
console.log(`update-sitemap: set <lastmod> to ${lastmod} in ${SITEMAP}`);
