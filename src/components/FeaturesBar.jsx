import React from 'react';
import { Heart, MapPin, Truck, Globe } from 'lucide-react';
import './FeaturesBar.css';

const FeaturesBar = () => {
    const features = [
        {
            icon: <Heart fill="#b32b2b" color="#b32b2b" />,
            topText: "Signature snacks made",
            bottomText: "by native makers",
            bgColor: "#fff5f5",
            accentColor: "#b32b2b",
            id: 1
        },
        {
            icon: <MapPin fill="#e29513" color="#e29513" />,
            topText: "Experience the",
            bottomText: "True Taste of India",
            bgColor: "#fff9eb",
            accentColor: "#e29513",
            id: 2
        },
        {
            icon: <Truck fill="#b32b2b" color="#b32b2b" />,
            topText: "Delivered Pan India",
            bottomText: "Express Shipping",
            bgColor: "#fff5f5",
            accentColor: "#b32b2b",
            id: 3
        },
        {
            icon: <Globe fill="#e29513" color="#e29513" />,
            topText: "Fast Shipping",
            bottomText: "Across All States",
            bgColor: "#fff9eb",
            accentColor: "#e29513",
            id: 4
        }
    ];

    return (
        <section className="features-bar-section">
            <div className="features-bar-container">
                {features.map((feature) => (
                    <div 
                        key={feature.id} 
                        className="feature-chip" 
                        style={{ backgroundColor: feature.bgColor }}
                        data-aos="fade-up"
                        data-aos-delay={feature.id * 100}
                    >
                        <div className="chip-icon-wrap" style={{ backgroundColor: `${feature.accentColor}15` }}>
                            {feature.icon}
                        </div>
                        <div className="chip-text">
                            <span className="text-top">{feature.topText}</span>
                            <span className="text-bottom" style={{ color: feature.accentColor }}>{feature.bottomText}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesBar;
