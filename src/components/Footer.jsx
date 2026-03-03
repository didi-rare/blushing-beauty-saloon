import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3 className="logo-text-light">Blushing Beauty</h3>
                    <p>Where professionalism meets perfection. Your premium destination for exquisite beauty services since 2022.</p>
                    <div className="footer-social">
                        <a href="https://wa.me/2348057451244" target="_blank" rel="noreferrer" title="WhatsApp">WA</a>
                        <a href="https://instagram.com/beautystudio_" target="_blank" rel="noreferrer" title="Instagram">IG</a>
                        <a href="https://tiktok.com/@blushingbeautyhub" target="_blank" rel="noreferrer" title="TikTok">TT</a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Navigate</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#portfolio">Our Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Get In Touch</h4>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/2348057451244" target="_blank" rel="noreferrer">+234 805 745 1244</a></p>
                    <p><strong>Instagram:</strong> <a href="https://instagram.com/beautystudio_" target="_blank" rel="noreferrer">@beautystudio_</a></p>
                    <p><strong>TikTok:</strong> <a href="https://tiktok.com/@blushingbeautyhub" target="_blank" rel="noreferrer">@blushingbeautyhub</a></p>

                    <div className="footer-hours">
                        <p><strong>Mon – Sat:</strong> 8:00 AM – 7:30 PM</p>
                        <p><strong>Sunday:</strong> 1:00 PM – 7:00 PM</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Blushing Beauty Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
