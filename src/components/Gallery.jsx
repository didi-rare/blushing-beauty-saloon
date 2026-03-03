import React from 'react';
import '../styles/components.css';

// Placeholder Images for aesthetic demonstration
const placeholder1 = "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Hair styling
const placeholder2 = "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Nails/Manicure
const placeholder3 = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Salon atmosphere

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Our Work & Vibe</h2>
                    <p>Step into the ultimate blushing beauty experience.</p>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src={placeholder1} alt="Hair Styling at Blushing Beauty" />
                    </div>
                    <div className="gallery-item">
                        <img src={placeholder2} alt="Nail Art and Manicures" />
                    </div>
                    <div className="gallery-item">
                        <img src={placeholder3} alt="Relaxing Salon Atmosphere" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
