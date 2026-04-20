import React from 'react';
import './PaatiCorner.css';

import palkovaPetti from '../assets/palkova-petti.png';
import kadalaiPetti from '../assets/kadalai-petti.png';
import jumboPetti from '../assets/jumbo-petti.png';
import palkovaPlate from '../assets/palkova-plate.png';

const corners = [
    {
        id: 1,
        label: "Palkova Specials",
        image: palkovaPlate,
        alt: "Palkova Sweets"
    },
    {
        id: 2,
        label: "Kadalai Mittai",
        image: kadalaiPetti,
        alt: "Kadalai Mittai Peanut Candy"
    },
    {
        id: 3,
        label: "Native Sweets",
        image: jumboPetti,
        alt: "Native Sweets Box"
    },
    {
        id: 4,
        label: "Gift Pettis",
        image: palkovaPetti,
        alt: "Gift Box"
    },
];

const PaatiCorner = () => {
    return (
        <section className="paati-section">
            <div className="paati-container">
                {/* Header */}
                <div className="paati-header" data-aos="fade-up">
                    <h2 className="paati-title">VSS Paati's Corner 🏺</h2>
                    <p className="paati-subtitle">
                        🍬 From Traditional Palkova to Sweet Treats &amp; Gifting Picks
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="paati-grid" data-aos="fade-up">
                    {corners.map((item) => (
                        <div key={item.id} className="paati-card">
                            <span className="paati-label">{item.label}</span>
                            <div className="paati-img-wrap">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="paati-img"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaatiCorner;
