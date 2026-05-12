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
