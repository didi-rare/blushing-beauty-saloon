import { SITE_URL } from '../config/contact';
import { servicePath } from '../config/servicePages';

// Head metadata + JSON-LD for a service page, consumed by scripts/prerender.js
// when it rewrites the built index.html template for each route.
export function getPageHead(page) {
    const url = `${SITE_URL}${servicePath(page.slug)}`;

    const service = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: page.name,
        description: page.description,
        url,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: [
            { '@type': 'Place', name: 'Orioke, Lagos' },
            { '@type': 'Place', name: 'Ogudu, Lagos' },
            { '@type': 'Place', name: 'Ojota, Lagos' },
            { '@type': 'Place', name: 'Ketu, Lagos' },
            { '@type': 'Place', name: 'Gbagada, Lagos' },
            { '@type': 'Place', name: 'Maryland, Lagos' },
            { '@type': 'Place', name: 'Mainland Lagos' },
        ],
    };

    const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
    };

    const breadcrumbs = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
            { '@type': 'ListItem', position: 3, name: page.name, item: url },
        ],
    };

    return {
        url,
        title: page.title,
        description: page.description,
        jsonld: [service, faqPage, breadcrumbs],
    };
}
