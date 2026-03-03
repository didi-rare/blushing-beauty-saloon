import React from 'react';
import '../styles/components.css';

const Header = () => {
    return (
        <header className="header glass-card">
            <div className="container header-container">
                <a href="/" className="logo-link">
                    <h2 className="logo-text">
                        <span className="logo-blushing">Blushing</span>
                        <br />
                        <span className="logo-beauty">Beauty Studio</span>
                    </h2>
                </a>

                <nav className="desktop-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                    </ul>
                </nav>

                <div className="header-cta">
                    <a href="#book" className="btn btn-primary">Book Now</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
