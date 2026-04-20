import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './Footer.css';

// Inline SVG social icons (lucide-react v1.x doesn't include brand icons)
const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);
const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
);
const YoutubeIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
);
const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-container">

                    {/* Column 1 - Get in Touch */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Get in touch</h4>
                        <ul className="footer-list">
                            <li>
                                <a href="mailto:info@vsskadalaimittai.in" className="footer-link contact-link">
                                    <Mail size={14} />
                                    info@vsskadalaimittai.in
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="footer-link contact-link">
                                    <Phone size={14} />
                                    +91 98765 43210
                                </a>
                            </li>
                        </ul>
                        <p className="footer-address">
                            VSS Kadalai Mittai,<br />
                            Tamil Nadu, India — 626 001
                        </p>
                    </div>

                    {/* Column 2 - VSS Kadalai Mittai */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">VSS Kadalai Mittai</h4>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Our Story</a></li>
                            <li><a href="#" className="footer-link">Our Blog</a></li>
                            <li><a href="#" className="footer-link">Corporate Bulk Orders</a></li>
                            <li><a href="#" className="footer-link">Store Locator</a></li>
                            <li><a href="#" className="footer-link">Media Coverage</a></li>
                            <li><a href="#" className="footer-link">Contact Us</a></li>
                            <li><a href="#" className="footer-link">Site Map</a></li>
                            <li className="footer-license">FSSAI LIC No: 12421999000166</li>
                            <li className="footer-license">CIN No: U15549TN2022PTC156684</li>
                        </ul>
                    </div>

                    {/* Column 3 - Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Quick Links</h4>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Terms &amp; Conditions</a></li>
                            <li><a href="#" className="footer-link">Shipping &amp; Delivery Policies</a></li>
                            <li><a href="#" className="footer-link">Safety Policy</a></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#" className="footer-link">Grievance Redressal Policy</a></li>
                            <li><a href="#" className="footer-link">Return &amp; Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 4 - Social Media */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Social Media</h4>
                        <p className="footer-follow">Follow us</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="#" className="social-icon" aria-label="YouTube">
                                <YoutubeIcon />
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <LinkedinIcon />
                            </a>
                        </div>

                        {/* VSS Logo in footer */}
                        <div className="footer-logo-wrap">
                            <div className="footer-vss-logo">
                                <div className="footer-vss-line"></div>
                                <span className="footer-vss-text">VSS</span>
                                <div className="footer-vss-lines-bottom">
                                    <div className="footer-vss-line-sm"></div>
                                    <div className="footer-vss-line-sm"></div>
                                </div>
                            </div>
                            <p className="footer-tagline">Taste the Tradition</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="footer-bottom">
                <p className="footer-copyright">
                    Copyright © 2026{' '}
                    <a href="#" className="footer-site-link">www.vsskadalaimittai.in</a>
                    {' '}all rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
