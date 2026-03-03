import React, { useState } from 'react';

const hairImages = [
    { src: '/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.20.18.jpeg', alt: 'Hair Styling' },
    { src: '/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.23.19.jpeg', alt: 'Hair Braiding' },
    { src: '/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.27.13.jpeg', alt: 'Hair Transformation' },
    { src: '/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.27.14.jpeg', alt: 'Hair Design' },
];

const nailImages = [
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.04.jpeg', alt: 'Nail Art' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.07.jpeg', alt: 'Nail Design' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.08.jpeg', alt: 'Manicure' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.30.jpeg', alt: 'Nail Art' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.36.jpeg', alt: 'Pedicure' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.23.41.jpeg', alt: 'Nail Polish' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.24.14.jpeg', alt: 'Nail Art' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.24.16.jpeg', alt: 'Nail Design' },
    { src: '/portfolio/nails/images/WhatsApp Image 2026-03-03 at 17.24.17.jpeg', alt: 'Nail Art' },
];

const PortfolioGallery = () => {
    const [activeTab, setActiveTab] = useState('all');

    const getFilteredItems = () => {
        if (activeTab === 'hair') return hairImages;
        if (activeTab === 'nails') return nailImages;
        return [...hairImages, ...nailImages];
    };

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Our Work</span>
                    <h2>Signature Creations</h2>
                    <p>Every client leaves our chair looking and feeling extraordinary.</p>
                </div>

                <div className="portfolio-tabs reveal">
                    <button className={`portfolio-tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Work</button>
                    <button className={`portfolio-tab ${activeTab === 'hair' ? 'active' : ''}`} onClick={() => setActiveTab('hair')}>Hair & Wigs</button>
                    <button className={`portfolio-tab ${activeTab === 'nails' ? 'active' : ''}`} onClick={() => setActiveTab('nails')}>Nails</button>
                </div>

                <div className="gallery-grid">
                    {getFilteredItems().map((item, index) => (
                        <div className="gallery-item reveal" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                            />
                            <div className="gallery-item-overlay">
                                <span>Book This Look →</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="https://wa.me/2348057451244" target="_blank" rel="noreferrer" className="btn btn-primary">
                        Book Your Appointment
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
