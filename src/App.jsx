import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App({ page = <Home /> }) {
    // Scroll-reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [page]);

    return (
        <div className="app-container">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Header />
            <main id="main-content">{page}</main>
            <Footer />
        </div>
    );
}

export default App;
