import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Hero.css';

// Import local assets
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: hero1,
            title: "Missing Home Snacks?",
            subtitle: "WE DELIVER THEM PAN INDIA",
            description: "Authentic flavors, just like you remember — now just a click away.",
            buttonText: "Taste the Tradition",
            badge: "100% ORIGINAL TASTE"
        },
        {
            id: 2,
            image: hero2,
            title: "Traditional Kadalai Mittai",
            subtitle: "PREMIUM PEANUT CANDY",
            description: "Handcrafted with love using the finest peanuts and pure jaggery.",
            buttonText: "Shop Savories",
            badge: "PURE INGREDIENTS"
        },
        {
            id: 3,
            image: hero3,
            title: "Sweeten Every Moment",
            subtitle: "CELEBRATE WITH VSS",
            description: "The perfect crunch for your snacks time, delivered fresh to your doorstep.",
            buttonText: "Explore Collection",
            badge: "PAN INDIA DELIVERY"
        }
    ];

    return (
        <section className="hero-section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1000}
                loop={true}
                className="hero-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="hero-slide">
                            <div 
                                className="hero-bg" 
                                style={{ backgroundImage: `url(${slide.image})` }}
                            ></div>
                            <div className="hero-overlay"></div>
                            <div className="hero-container">
                                <div className="hero-content">
                                    <span 
                                        className="hero-badge"
                                        data-aos="fade-down"
                                        data-aos-delay="200"
                                    >
                                        {slide.badge}
                                    </span>
                                    <h1 
                                        className="hero-title"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        {slide.title}
                                    </h1>
                                    <h2 
                                        className="hero-subtitle"
                                        data-aos="fade-up"
                                        data-aos-delay="600"
                                    >
                                        {slide.subtitle}
                                    </h2>
                                    <p 
                                        className="hero-description"
                                        data-aos="fade-up"
                                        data-aos-delay="800"
                                    >
                                        {slide.description}
                                    </p>
                                    <div 
                                        className="hero-actions"
                                        data-aos="fade-up"
                                        data-aos-delay="1000"
                                    >
                                        <button className="primary-btn">{slide.buttonText}</button>
                                        <div className="hero-icons">
                                            <div className="hero-icon-item">
                                                <img src="https://cdn-icons-png.flaticon.com/512/709/709790.png" alt="Shipping" />
                                            </div>
                                            <div className="hero-icon-item">
                                                <img src="https://cdn-icons-png.flaticon.com/512/679/679821.png" alt="Package" />
                                            </div>
                                            <div className="hero-icon-item">
                                                <img src="https://cdn-icons-png.flaticon.com/512/206/206606.png" alt="India" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative Seal (Corner/Side) */}
                            <div className="hero-seal" data-aos="zoom-in" data-aos-delay="1200">
                                <div className="seal-content">
                                    <span>100%</span>
                                    <span>ORIGINAL</span>
                                    <span>TASTE</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
