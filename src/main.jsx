import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { getRoute } from './routes.jsx'
import './styles/global.css'
import './styles/components.css'
import './styles/pages.css'

// Apply the async-loaded font stylesheet (see the font-css link in index.html)
const fontCss = document.getElementById('font-css')
if (fontCss) fontCss.media = 'all'

const route = getRoute(window.location.pathname)
const container = document.getElementById('root')
const app = (
    <StrictMode>
        <App page={route.element} />
    </StrictMode>
)

// Prerendered pages (scripts/prerender.js sets data-prerendered) are hydrated;
// the dev server serves the raw template, which is replaced instead.
if (container.dataset.prerendered) {
    hydrateRoot(container, app)
} else {
    createRoot(container).render(app)
}
