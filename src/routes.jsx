import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import { SERVICE_PAGES, servicePath } from './config/servicePages';

// One entry per static page. The prerenderer (scripts/prerender.js) emits an
// HTML file and a sitemap entry for every path listed here; `page` is null
// for the home route because index.html already carries its head metadata.
export const ROUTES = [
    { path: '/', element: <Home />, page: null },
    ...SERVICE_PAGES.map((page) => ({
        path: servicePath(page.slug),
        element: <ServicePage page={page} />,
        page,
    })),
];

export function getRoute(pathname) {
    const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
    return ROUTES.find(({ path }) => path === normalized) ?? ROUTES[0];
}
