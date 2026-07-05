import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { ROUTES, getRoute } from './routes.jsx';
import { getPageHead } from './seo/pageHead.js';

export function render(path) {
    const route = getRoute(path);
    return renderToString(
        <StrictMode>
            <App page={route.element} />
        </StrictMode>,
    );
}

// head is null for the home route — its metadata lives in index.html itself.
export function getPages() {
    return ROUTES.map(({ path, page }) => ({
        path,
        head: page ? getPageHead(page) : null,
    }));
}
