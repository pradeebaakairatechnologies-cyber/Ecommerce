import React from 'react';
import { Heart, MapPin, Truck, Globe } from 'lucide-react';
import './FeaturesBar.css';

const FeaturesBar = () => {
    const features = [
        {
            icon: <Heart fill="#e57373" color="#e57373" />,
            topText: "Signature snacks made",
            bottomText: "by native makers",
            bgColor: "#fff5f5",
            accentColor: "#d32f2f",
            id: 1
        },
        {
            icon: <MapPin fill="#d4a373" color="#d4a373" />,
            topText: "Experience the",
            bottomText: "True Taste of India",
            bgColor: "#fefae0",
            accentColor: "#8b4513",
            id: 2
        },
        {
            icon: <Truck fill="#81c784" color="#81c784" />,
            topText: "Delivered Pan India",
            bottomText: "Express Shipping",
            bgColor: "#f1f8e9",
            accentColor: "#2e7d32",
            id: 3
        },
        {
            icon: <Globe fill="#64b5f6" color="#64b5f6" />,
            topText: "Fast Shipping",
            bottomText: "Across All States",
            bgColor: "#e3f2fd",
            accentColor: "#1565c0",
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
