import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Globe } from 'lucide-react';
import './OrderPopup.css';

// Assets
import popupLadoo from '../assets/popup/popup-ladoo.png';
import popupDryfruits from '../assets/popup/popup-dryfruits.png';
import popupBox from '../assets/popup/popup-box.png';

const OrderPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true);
            // Trigger animation after a tiny delay to ensure DOM is ready
            setTimeout(() => setIsVisible(true), 10);
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for animation to finish before unmounting
        setTimeout(() => setShouldRender(false), 600);
    };

    if (!shouldRender) return null;

    return (
        <div className={`order-popup-overlay ${isVisible ? 'show' : ''}`}>
            <div className="order-popup-container">
                <button className="close-popup" onClick={handleClose} aria-label="Close popup">
                    <X size={24} />
                </button>

                {/* Decorative Images */}
                <img src={popupLadoo} alt="" className="popup-img-top-left" />
                <img src={popupDryfruits} alt="" className="popup-img-center-bottom" />
                <img src={popupBox} alt="" className="popup-img-box" />

                <div className="popup-header">
                    <h2>Choose How You'd Like to Order</h2>
                </div>

                <div className="popup-options">
                    <div className="popup-divider"></div>
                    
                    {/* Local Delivery */}
                    <div className="option-card">
                        <h3>Delivery in Hyderabad</h3>
                        <p>Get fresh sweets delivered from our outlets in Hyderabad</p>
                        <a 
                            href="https://wa.me/91XXXXXXXXXX" 
                            className="whatsapp-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircle size={20} />
                            Order Now On WhatsApp
                        </a>
                        <span className="delivery-time">Delivery within hours</span>
                    </div>

                    {/* worldwide Delivery */}
                    <div className="option-card">
                        <h3>World wide delivery</h3>
                        <p>Sending love across World? Explore our menu and get sweets delivered to your city.</p>
                        <a 
                            href="/shop" 
                            className="order-btn"
                        >
                            Order now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPopup;
