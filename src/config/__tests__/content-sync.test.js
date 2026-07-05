/**
 * Drift guard for SEO content.
 *
 * SERVICES and FAQS in contact.js are duplicated in index.html (the
 * hasOfferCatalog and FAQPage JSON-LD blocks, plus the <noscript>
 * fallback). If they drift, Google's FAQ rich-snippet eligibility breaks
 * silently. This test asserts that every service name and FAQ question in
 * contact.js still appears in the static index.html.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { SERVICES, FAQS } from '../contact';

// Read index.html and decode &amp; so the test matches both JSON-LD (raw &)
// and HTML noscript content (encoded &amp;) without bothering the caller.
const indexHtml = fs
    .readFileSync(path.resolve(__dirname, '..', '..', '..', 'index.html'), 'utf-8')
    .replace(/&amp;/g, '&');

// The static hero shell inside <div id="root"> duplicates the H1 and tagline
// from Hero.jsx so crawlers see them without executing JS. Both files must
// contain the expected text, or the raw-HTML H1 fix regresses silently.
const heroSrc = fs.readFileSync(
    path.resolve(__dirname, '..', '..', 'components', 'Hero.jsx'),
    'utf-8',
);
const normalize = (s) => s.replace(/&amp;/g, '&').replace(/\s+/g, ' ');
const HERO_H1 = '<h1>Blushing Beauty Studio</h1>';
const HERO_TAGLINE =
    'Where Professionalism Meets Perfection. Since 2022, we have been delivering premium beauty ' +
    'experiences tailored to your lifestyle. Specializing in expert hair & wigs, stunning makeup ' +
    '& Gele, flawless nails, and revitalizing facials — we are obsessed with the details that ' +
    'make you shine. Experience unmatched client care.';

describe('SEO content sync — Hero.jsx ↔ index.html static shell', () => {
    it.each([
        ['Hero.jsx', heroSrc],
        ['index.html', indexHtml],
    ])('%s contains the hero H1 and tagline', (_name, source) => {
        expect(normalize(source)).toContain(HERO_H1);
        expect(normalize(source)).toContain(HERO_TAGLINE);
    });
});

describe('SEO content sync — contact.js ↔ index.html', () => {
    it.each(SERVICES.map(({ name }) => [name]))(
        'service "%s" is present in index.html (JSON-LD or noscript)',
        (name) => {
            expect(indexHtml).toContain(name);
        },
    );

    it.each(FAQS.map(({ question }) => [question]))(
        'FAQ question "%s" is present in index.html JSON-LD',
        (question) => {
            expect(indexHtml).toContain(question);
        },
    );
});
