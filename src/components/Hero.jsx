import { WHATSAPP_URL } from '../config/contact';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Decorative background — hidden from assistive tech */}
            <div className="hero-bg-overlay" aria-hidden="true"></div>
            <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
            <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
            <div className="hero-orb hero-orb-3" aria-hidden="true"></div>

            <div className="hero-container">
                <span className="hero-label">Welcome to</span>
                <h1>Blushing Beauty Studio</h1>
                <div className="hero-divider" aria-hidden="true"></div>
                <p className="hero-tagline">
                    Where Professionalism Meets Perfection. Since 2022, we have been delivering premium beauty
                    experiences tailored to your lifestyle. Specializing in expert hair &amp; wigs, stunning makeup
                    &amp; Gele, flawless nails, and revitalizing facials — we are obsessed with the details that
                    make you shine. Experience unmatched client care.
                </p>
                <div className="hero-buttons">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label="Book via WhatsApp (opens in a new tab)"
                    >
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
