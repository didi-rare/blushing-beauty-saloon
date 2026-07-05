import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Apply the async-loaded font stylesheet (see the font-css link in index.html)
const fontCss = document.getElementById('font-css')
if (fontCss) fontCss.media = 'all'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
