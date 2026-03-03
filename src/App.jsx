import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PortfolioGallery from './components/PortfolioGallery';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';

function App() {
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
    }, []);

    return (
        <div className="app-container">
            <Header />
            <main>
                <Hero />
                <AboutUs />
                <PortfolioGallery />

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container cta-content">
                        <h2>Love What You See?</h2>
                        <p>Contact us directly on WhatsApp to get a personalized quote or book your next look.</p>
                        <a href="https://wa.me/2348057451244" target="_blank" rel="noreferrer" className="btn btn-primary">
                            Book on WhatsApp
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
