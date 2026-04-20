import React, { useState } from 'react';
import { Search, User, ShoppingBag, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo Section */}
                <div className="navbar-logo">
                    <div className="vss-logo-box">
                        <div className="vss-line-top"></div>
                        <span className="vss-text">VSS</span>
                        <div className="vss-lines-bottom">
                            <div className="vss-line"></div>
                            <div className="vss-line"></div>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    <li><a href="/" className="active">Home</a></li>
                    <li className="dropdown">
                        <a href="/shop">Shop By Category <ChevronDown size={16} /></a>
                        <ul className="dropdown-menu">
                            <li><a href="/category/sweets">Sweets</a></li>
                            <li><a href="/category/savories">Savories</a></li>
                            <li><a href="/category/snacks">Snacks</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="/mood">Shop by Mood <ChevronDown size={16} /></a>
                        <ul className="dropdown-menu">
                            <li><a href="/mood/party">Party Time</a></li>
                            <li><a href="/mood/movie">Movie Magic</a></li>
                            <li><a href="/mood/healthy">Healthy Choice</a></li>
                        </ul>
                    </li>
                    <li><a href="/bulk">Bulk Orders</a></li>
                    <li><a href="/track">Track Order</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>

                {/* Action Icons */}
                <div className="navbar-actions">
                    <button className="icon-btn" aria-label="Search">
                        <Search size={22} />
                    </button>
                    <button className="icon-btn" aria-label="Account">
                        <User size={22} />
                    </button>
                    <button className="icon-btn cart-btn" aria-label="Cart">
                        <ShoppingBag size={22} />
                        <span className="cart-count">0</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
