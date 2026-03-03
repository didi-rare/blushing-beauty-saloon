import React from 'react';
import '../styles/components.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content glass-card">
                    <h1>Experience Timeless Elegance</h1>
                    <p>
                        Welcome to Blushing Beauty Studio. We specialize in premium hair styling, beautiful braids,
                        and pristine nail artistry. Discover your best look in our relaxing atmosphere.
                    </p>
                    <div className="hero-buttons">
                        <a href="https://wa.me/YOURNUMBERHERE" target="_blank" rel="noreferrer" className="btn btn-primary">Book via WhatsApp</a>
                        <a href="#services" className="btn btn-outline">View Our Services</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
