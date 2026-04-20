import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';
import './Footer.css';

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
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="social-icon" aria-label="YouTube">
                                <Youtube size={18} />
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <Linkedin size={18} />
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
