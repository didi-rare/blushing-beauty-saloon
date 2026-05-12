import { useState, useEffect, useRef, useCallback } from 'react';
import { WHATSAPP_URL } from '../config/contact';
import ExternalLink from './ExternalLink';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const hamburgerRef = useRef(null);
    const drawerRef = useRef(null);
    const scrolledRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const next = window.scrollY > 50;
            if (next !== scrolledRef.current) {
                scrolledRef.current = next;
                setScrolled(next);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const handleKey = (e) => { if (e.key === 'Escape') closeMenu(); };
        const handleResize = () => { if (window.innerWidth > 768) closeMenu(); };
        window.addEventListener('keydown', handleKey);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('keydown', handleKey);
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen, closeMenu]);

    useEffect(() => {
        if (menuOpen) drawerRef.current?.querySelector('a')?.focus();
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen((open) => !open);

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-container">
                    <a href="#home" className="logo-link">
                        <div className="logo-text">
                            <span className="logo-blushing">Blushing Beauty</span>
                            <span className="logo-beauty">Studio</span>
                        </div>
                    </a>

                    <nav className="desktop-nav" aria-label="Primary">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="header-cta">
                        <ExternalLink href={WHATSAPP_URL} className="btn btn-primary">
                            Book Now
                        </ExternalLink>
                    </div>

                    <button
                        ref={hamburgerRef}
                        className={`hamburger ${menuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <nav
                ref={drawerRef}
                id="mobile-nav"
                className={`mobile-nav ${menuOpen ? 'open' : ''}`}
                aria-label="Mobile"
                inert={menuOpen ? undefined : ''}
            >
                <ul>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                    <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <ExternalLink href={WHATSAPP_URL} className="btn btn-primary" onClick={closeMenu}>
                    Book via WhatsApp
                </ExternalLink>
            </nav>
            {menuOpen && <div className="mobile-overlay visible" onClick={closeMenu} aria-hidden="true"></div>}
        </>
    );
};

export default Header;
