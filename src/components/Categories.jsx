import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Categories.css';

import palkovaImg from '../assets/palkova.png';
import kadalaiImg from '../assets/kadalai.png';
import sweetsImg from '../assets/sweets.png';

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Palkova",
            image: palkovaImg,
            color: "#b32b2b" // Red
        },
        {
            id: 2,
            name: "Kadalai Mittai",
            image: kadalaiImg,
            color: "#e29513" // Gold
        },
        {
            id: 3,
            name: "Native Sweets",
            image: sweetsImg,
            color: "#b32b2b" // Red
        }
    ];

    return (
        <section className="categories-section">
            <div className="categories-container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">Our Specialities</h2>
                    <p className="section-subtitle">Traditional flavors delivered across India</p>
                </div>
                
                <div className="categories-grid">
                    {categories.map((cat, index) => (
                        <div 
                            key={cat.id} 
                            className="category-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className="card-image-wrap">
                                <img src={cat.image} alt={cat.name} className="category-img" />
                            </div>
                            
                            <div className="card-wave-separator">
                                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                                    <path 
                                        d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
                                        fill={cat.color}
                                    ></path>
                                </svg>
                            </div>
                            
                            <div className="card-content" style={{ backgroundColor: cat.color }}>
                                <h3 className="category-name">{cat.name}</h3>
                                <button className="category-btn">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
