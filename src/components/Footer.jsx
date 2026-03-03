import React from 'react';
import '../styles/components.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3 className="logo-text-light">Blushing Beauty Studio</h3>
                    <p>Your premium destination for exquisite hair and nail services.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact & Booking</h4>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/YOURNUMBERHERE" target="_blank" rel="noreferrer">Message Us</a></p>
                    <p><strong>Instagram:</strong> <a href="https://instagram.com/YOURIGHERE" target="_blank" rel="noreferrer">@blushingbeautystudio</a></p>
                    <p><strong>Hours:</strong> Mon - Sat, 9am - 7pm</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Blushing Beauty Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
