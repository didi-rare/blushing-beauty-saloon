import { useState, useEffect, useRef } from 'react';
import { WHATSAPP_URL } from '../config/contact';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const hamburgerRef = useRef(null);
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body-scroll lock tied to menu state, with cleanup on unmount
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Close on Escape, close & restore desktop layout on viewport resize
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
    }, [menuOpen]);

    // Move focus into the drawer when it opens, return to hamburger on close
    useEffect(() => {
        if (menuOpen && drawerRef.current) {
            const firstLink = drawerRef.current.querySelector('a');
            firstLink?.focus();
        } else if (!menuOpen && hamburgerRef.current && document.activeElement === document.body) {
            // intentionally no-op when focus is already elsewhere
        }
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen((open) => !open);
    const closeMenu = () => {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
    };

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
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="header-cta">
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Book Now
                        </a>
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
                aria-hidden={!menuOpen}
            >
                <ul>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={closeMenu}
                >
                    Book via WhatsApp
                </a>
            </nav>
            {menuOpen && <div className="mobile-overlay visible" onClick={closeMenu} aria-hidden="true"></div>}
        </>
    );
};

export default Header;
