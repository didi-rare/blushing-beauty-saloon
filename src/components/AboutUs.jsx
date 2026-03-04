import React from 'react';

const AboutUs = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                {/* Left: Visual */}
                <div className="about-visual reveal-left">
                    <div className="about-visual-card">
                        <img
                            src="/portfolio/hair/images/WhatsApp Image 2026-03-03 at 17.23.19.jpeg"
                            alt="Inside Blushing Beauty Studio"
                        />
                    </div>
                    <div className="about-visual-accent"></div>
                    <div className="about-visual-badge">
                        <span className="badge-number">3+</span>
                        <span className="badge-text">Years of Excellence</span>
                    </div>
                </div>

                {/* Right: Text */}
                <div className="about-text reveal-right">
                    <span className="section-label">Our Story</span>
                    <h2>Your Beauty, Our Passion</h2>
                    <p>
                        Founded in January 2022, Blushing Beauty Studio is more than just a salon — it is a space
                        where your confidence takes center stage. We know that every client is unique, which is why
                        we take the time to deliver personalized, breathtaking results every single time.
                    </p>
                    <p>
                        Whether you are sitting in our chair for a luxurious hair and wig transformation, flawless
                        makeup and Gele, or taking a moment to unwind with our soothing facials and complete
                        mani-pedi care, your satisfaction is our highest priority. We believe in strict
                        professionalism, a welcoming atmosphere. Do come and have a wonderful experience with us.
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <span className="feature-icon">✂️</span>
                            <span>Hair & Wigs</span>
                        </div>
                        <div className="about-feature">
                            <span className="feature-icon">💅</span>
                            <span>Nails & Pedicure</span>
                        </div>
                        <div className="about-feature">
                            <span className="feature-icon">💄</span>
                            <span>Makeup & Gele</span>
                        </div>
                        <div className="about-feature">
                            <span className="feature-icon">🧖</span>
                            <span>Facials & Skincare</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
