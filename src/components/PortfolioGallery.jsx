import { useState } from 'react';
import { WHATSAPP_URL } from '../config/contact';

const hairImages = [
    { src: '/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.20.18.jpeg', alt: 'Protective braid styling — side profile' },
    { src: '/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.23.19.jpeg', alt: 'Layered hair braiding installation in progress' },
    { src: '/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.27.13.jpeg', alt: 'Long box braids — finished transformation' },
    { src: '/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.27.14.jpeg', alt: 'Coloured hair design styling — back view' },
];

const nailImages = [
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.04.jpeg', alt: 'Glossy stiletto nail art — full set' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.07.jpeg', alt: 'Almond-shaped nails with French tips' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.08.jpeg', alt: 'Classic manicure on natural nails' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.30.jpeg', alt: 'Pink and gold nail art set' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.36.jpeg', alt: 'Pedicure with polished toenails' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.41.jpeg', alt: 'Nail polish application — close-up' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.24.14.jpeg', alt: 'Bold nail art with embellishments' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.24.16.jpeg', alt: 'Coffin-shape nail design' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.24.17.jpeg', alt: 'Sculpted gel nail art — detailed' },
];

const PortfolioGallery = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [failed, setFailed] = useState(() => new Set());

    const getFilteredItems = () => {
        const items =
            activeTab === 'hair' ? hairImages :
                activeTab === 'nails' ? nailImages :
                    [...hairImages, ...nailImages];
        return items.filter((item) => !failed.has(item.src));
    };

    const handleImageError = (src) => {
        setFailed((prev) => {
            const next = new Set(prev);
            next.add(src);
            return next;
        });
    };

    const tabs = [
        { key: 'all', label: 'All Work' },
        { key: 'hair', label: 'Hair & Wigs' },
        { key: 'nails', label: 'Nails' },
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Our Work</span>
                    <h2>Signature Creations</h2>
                    <p>Every client leaves our chair looking and feeling extraordinary.</p>
                </div>

                <div className="portfolio-tabs reveal" role="group" aria-label="Filter portfolio">
                    {tabs.map(({ key, label }) => (
                        <button
                            key={key}
                            className={`portfolio-tab ${activeTab === key ? 'active' : ''}`}
                            onClick={() => setActiveTab(key)}
                            aria-pressed={activeTab === key}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {getFilteredItems().map((item, index) => (
                        <a
                            key={item.src}
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gallery-item reveal"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            aria-label={`Book this look on WhatsApp: ${item.alt}`}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                decoding="async"
                                onError={() => handleImageError(item.src)}
                            />
                            <div className="gallery-item-overlay" aria-hidden="true">
                                <span>Book This Look →</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="portfolio-cta">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Book Your Appointment
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
