import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Floating background orbs */}
            <div className="hero-bg-overlay"></div>
            <div className="hero-orb hero-orb-1"></div>
            <div className="hero-orb hero-orb-2"></div>
            <div className="hero-orb hero-orb-3"></div>

            <div className="hero-container">
                <span className="hero-label">Welcome to</span>
                <h1>Blushing Beauty Studio</h1>
                <div className="hero-divider"></div>
                <p className="hero-tagline">
                    Where Professionalism Meets Perfection. Since 2022, we have been delivering premium beauty
                    experiences tailored to your lifestyle. Specializing in expert hair &amp; wigs, stunning makeup
                    &amp; Gele, flawless nails, and revitalizing facials — we are obsessed with the details that
                    make you shine. Experience unmatched client care.
                </p>
                <div className="hero-buttons">
                    <a href="https://wa.me/2348057451244" target="_blank" rel="noreferrer" className="btn btn-primary">
                        Book via WhatsApp
                    </a>
                    <a href="#portfolio" className="btn btn-outline">
                        View Our Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
