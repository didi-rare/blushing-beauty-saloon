import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ROUTES, getRoute } from '../routes';
import { SERVICE_PAGES } from '../config/servicePages';

describe('routes', () => {
    it('has one route per service page plus home', () => {
        expect(ROUTES).toHaveLength(SERVICE_PAGES.length + 1);
        expect(ROUTES[0].path).toBe('/');
    });

    it('resolves paths with and without a trailing slash', () => {
        expect(getRoute('/services/hair-and-wigs/').page?.slug).toBe('hair-and-wigs');
        expect(getRoute('/services/hair-and-wigs').page?.slug).toBe('hair-and-wigs');
    });

    it('falls back to home for unknown paths', () => {
        expect(getRoute('/no-such-page/')).toBe(ROUTES[0]);
    });
});

describe('service pages', () => {
    it.each(SERVICE_PAGES.map((page) => [page.slug, page]))(
        '%s renders exactly one H1 with its heading and a WhatsApp CTA',
        (slug, page) => {
            const route = getRoute(`/services/${slug}/`);
            render(route.element);

            const headings = screen.getAllByRole('heading', { level: 1 });
            expect(headings).toHaveLength(1);
            expect(headings[0]).toHaveTextContent(page.h1);

            expect(screen.getAllByRole('link', { name: /whatsapp/i }).length).toBeGreaterThan(0);

            page.faqs.forEach(({ question }) => {
                expect(screen.getByText(question)).toBeInTheDocument();
            });
        },
    );
});
