import React from 'react';
import { Milk, Package, Truck, Clock, Smile, Flower2 } from 'lucide-react';
import './About.css';

import gheeImg from '../assets/about-ghee.png';
import fruitsImg from '../assets/about-fruits.png';
import womanImg from '../assets/about-woman.png';

const About = () => {
    const features = [
        {
            icon: <Milk size={32} />,
            title: "Pure Ingredients",
            id: 1
        },
        {
            icon: <Package size={32} />,
            title: "Premium Packaging",
            id: 2
        },
        {
            icon: <Truck size={32} />,
            title: "Shipping Pan India",
            id: 3
        },
        {
            icon: <Clock size={32} />,
            title: "Long Shelf Life",
            id: 4
        },
        {
            icon: <Smile size={32} />,
            title: "Authentic Taste",
            id: 5
        },
        {
            icon: <Flower2 size={32} />,
            title: "Freshness Guaranteed",
            id: 6
        }
    ];

    return (
        <section className="about-section" id="about">
            {/* Background Decorative Elements */}
            <div className="about-bg-elements">
                <img src={fruitsImg} alt="fruits" className="floating-fruits fruits-1" />
                <img src={fruitsImg} alt="fruits" className="floating-fruits fruits-2" />
            </div>

            <div className="about-container">
                {/* Left Side Image */}
                <div className="about-image-left" data-aos="fade-right">
                    <img src={gheeImg} alt="Traditional Ghee Pot" className="ghee-pot" />
                </div>

                {/* Center Content */}
                <div className="about-content">
                    <div className="about-header" data-aos="fade-up">
                        <h2 className="about-title">About Us</h2>
                        <p className="about-description">
                            With a passion for preserving culinary traditions and a commitment to quality, we take pride in
                            curating an exquisite collection of traditional sweets. Each sweet is a labor of love, crafted with
                            the finest ingredients and infused with the flavors of India's rich cultural heritage.
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div 
                                key={feature.id} 
                                className="feature-item"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <span className="feature-title">{feature.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="about-image-right" data-aos="fade-left">
                    <img src={womanImg} alt="Happy Woman" className="woman-img" />
                </div>
            </div>
        </section>
    );
};

export default About;
