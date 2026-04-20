import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './Snacks.css';

import palkovaPlate from '../assets/palkova-plate.png';
import kadalaiPlate from '../assets/kadalai-plate.png';

const snacks = [
    {
        id: 1,
        name: "Srivilliputhur Palkova",
        image: palkovaPlate,
        badge: "Tamil Nadu Special",
        badgeColor: "#e29513",
        rating: 4.74,
        originalPrice: 239,
        discountedPrice: 199,
        weight: "200 g",
        isNew: false,
    },
    {
        id: 2,
        name: "Kadalai Mittai (Peanut Candy)",
        image: kadalaiPlate,
        badge: "Tamil Nadu Special",
        badgeColor: "#e29513",
        rating: 4.91,
        originalPrice: 239,
        discountedPrice: 199,
        weight: "200 g",
        isNew: false,
    },
    {
        id: 3,
        name: "Coconut Burfi",
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&q=80",
        badge: "Tamil Nadu Special",
        badgeColor: "#e29513",
        rating: 4.65,
        originalPrice: 239,
        discountedPrice: 199,
        weight: "200 g",
        isNew: false,
    },
    {
        id: 4,
        name: "Assorted Millet Laddu",
        image: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?w=400&q=80",
        badge: "Tamil Nadu Special",
        badgeColor: "#e29513",
        rating: 4.72,
        originalPrice: 239,
        discountedPrice: 199,
        weight: "200 g",
        isNew: false,
    },
    {
        id: 5,
        name: "Groundnut Chikki",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
        badge: "Native Special",
        badgeColor: "#b32b2b",
        rating: 4.83,
        originalPrice: 239,
        discountedPrice: 199,
        weight: "200 g",
        isNew: true,
    },
    {
        id: 6,
        name: "Karur Thenga Mittai",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",
        badge: "Tamil Nadu Special",
        badgeColor: "#e29513",
        rating: 4.59,
        originalPrice: 239,
        discountedPrice: 199,
        weight: "150 g",
        isNew: false,
    },
    {
        id: 7,
        name: "Madurai Mixture",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80",
        badge: "Tamil Nadu Special",
        badgeColor: "#e29513",
        rating: 4.78,
        originalPrice: 239,
        discountedPrice: 199,
        weight: "200 g",
        isNew: false,
    },
    {
        id: 8,
        name: "Ribbon Pakoda",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
        badge: "South Indian Special",
        badgeColor: "#b32b2b",
        rating: 4.75,
        originalPrice: 239,
        discountedPrice: 199,
        weight: "180 g",
        isNew: false,
    },

];

const SnackCard = ({ snack }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="snack-card">
            <div className="snack-image-wrap">
                {snack.isNew && <span className="new-tag">New</span>}
                <img
                    src={imgError ? palkovaPlate : snack.image}
                    alt={snack.name}
                    className="snack-img"
                    onError={() => setImgError(true)}
                />
            </div>
            <div className="snack-info">
                <span className="snack-badge" style={{ color: snack.badgeColor, borderColor: snack.badgeColor }}>
                    {snack.badge}
                </span>
                <h4 className="snack-name">{snack.name}</h4>
                <div className="snack-rating">
                    <Star size={13} fill="#e29513" color="#e29513" />
                    <span>{snack.rating}</span>
                    <span className="verified-dot">✓</span>
                </div>
                <div className="snack-price">
                    <span className="snack-current">₹{snack.discountedPrice}</span>
                    <span className="snack-original">₹{snack.originalPrice}</span>
                </div>
                <p className="snack-weight">{snack.weight}</p>
                <button className="snack-cart-btn">Add To Cart</button>
            </div>
        </div>
    );
};

const Snacks = () => {
    return (
        <section className="snacks-section">
            <div className="snacks-container">
                <h2 className="snacks-title" data-aos="fade-up">Signature Snacks Of South</h2>
                <div className="snacks-grid" data-aos="fade-up">
                    {snacks.map((snack) => (
                        <SnackCard key={snack.id} snack={snack} />
                    ))}
                </div>
                <div className="snacks-footer" data-aos="fade-up">
                    <button className="view-all-snacks-btn">
                        <span>🍬🍭</span> View All Products →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Snacks;
