import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import './Products.css';

import palkovaPetti from '../assets/palkova-petti.png';
import kadalaiPetti from '../assets/kadalai-petti.png';
import jumboPetti from '../assets/jumbo-petti.png';

const products = [
    {
        id: 1,
        name: "Palakara Petti",
        image: palkovaPetti,
        badge: "South Indian Special",
        rating: 4.82,
        reviews: 120,
        originalPrice: 1949,
        discountedPrice: 1799,
        options: ["1.2kg (7 tins)", "2.4kg (14 tins)"],
        type: "Palkova Special"
    },
    {
        id: 2,
        name: "Kadalai Mittai Jumbo Petti",
        image: kadalaiPetti,
        badge: "Flagship Product",
        rating: 4.95,
        reviews: 245,
        originalPrice: 1299,
        discountedPrice: 999,
        options: ["1kg", "2kg"],
        type: "Peanut Candy"
    },
    {
        id: 3,
        name: "Jumbo Native Sweets Petti",
        image: jumboPetti,
        badge: "Bestseller",
        rating: 4.87,
        reviews: 180,
        originalPrice: 2299,
        discountedPrice: 1899,
        options: ["1.7 kg", "3.4 kg"],
        type: "Assorted Box"
    }
];

const Products = () => {
    return (
        <section className="products-section">
            <div className="products-container">
                <div className="products-header" data-aos="fade-up">
                    <h2 className="section-title-large">South Indian Pettis That Feel Like Native</h2>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card" data-aos="fade-up">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-img" />
                                {product.badge && <span className="product-badge-tag">{product.badge}</span>}
                            </div>
                            
                            <div className="product-details">
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-meta">
                                    <div className="rating">
                                        <Star size={16} fill="#e29513" color="#e29513" />
                                        <span>{product.rating}</span>
                                        <div className="verified-badge">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-pricing">
                                    <span className="discounted-price">₹{product.discountedPrice}</span>
                                    <span className="original-price">₹{product.originalPrice}</span>
                                </div>

                                <div className="product-selection">
                                    <select className="weight-select">
                                        {product.options.map((opt, i) => (
                                            <option key={i} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>

                                <button className="add-to-cart-btn">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="products-footer" data-aos="fade-up">
                    <button className="view-all-btn">
                        <div className="mini-images">
                           <img src={palkovaPetti} alt="p" />
                           <img src={kadalaiPetti} alt="k" />
                           <img src={jumboPetti} alt="j" />
                        </div>
                        View All Products <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
