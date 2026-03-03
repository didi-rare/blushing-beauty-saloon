import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = !menuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-container">
                    <a href="/" className="logo-link">
                        <div className="logo-text">
                            <span className="logo-blushing">Blushing Beauty</span>
                            <span className="logo-beauty">Studio</span>
                        </div>
                    </a>

                    <nav className="desktop-nav">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="header-cta">
                        <a href="https://wa.me/2348057451244" target="_blank" rel="noreferrer" className="btn btn-primary">Book Now</a>
                    </div>

                    <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile Nav Drawer */}
            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <a href="https://wa.me/2348057451244" target="_blank" rel="noreferrer" className="btn btn-primary" onClick={closeMenu}>Book via WhatsApp</a>
            </nav>
            {menuOpen && <div className="mobile-overlay visible" onClick={closeMenu}></div>}
        </>
    );
};

export default Header;
