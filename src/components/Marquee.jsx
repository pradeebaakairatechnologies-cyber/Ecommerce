import React from 'react';
import { ShieldCheck, Clock, Truck, Leaf, Star, Award } from 'lucide-react';
import './Marquee.css';

const items = [
    { icon: <ShieldCheck size={18} />, text: "No Added Preservatives", color: "#e29513" },
    { icon: <Clock size={18} />, text: "Dispatch Within 48 Hours", color: "#22c55e" },
    { icon: <Truck size={18} />, text: "Ships Pan India", color: "#3b82f6" },
    { icon: <Leaf size={18} />, text: "100% Natural Ingredients", color: "#e29513" },
    { icon: <Star size={18} />, text: "Authentic Native Taste", color: "#b32b2b" },
    { icon: <Award size={18} />, text: "Premium Quality Guaranteed", color: "#22c55e" },
];

const Marquee = () => {
    // Duplicate items for seamless infinite loop
    const allItems = [...items, ...items, ...items];

    return (
        <div className="marquee-wrapper">
            <div className="marquee-track">
                {allItems.map((item, index) => (
                    <div key={index} className="marquee-item">
                        <span
                            className="marquee-icon"
                            style={{ backgroundColor: `${item.color}20`, color: item.color }}
                        >
                            {item.icon}
                        </span>
                        <span className="marquee-text">{item.text}</span>
                        <span className="marquee-divider">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
