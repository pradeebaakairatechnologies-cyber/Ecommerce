import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Glimpse.css';

import palkovaPlate from '../assets/palkova-plate.png';
import kadalaiPlate from '../assets/kadalai-plate.png';
import palkovaPetti from '../assets/palkova-petti.png';
import kadalaiPetti from '../assets/kadalai-petti.png';
import jumboPetti from '../assets/jumbo-petti.png';

const glimpseItems = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
        product: "Sattur Ribbon Pakoda",
        price: 199,
        originalPrice: 239,
    },
    {
        id: 2,
        image: palkovaPlate,
        product: "Srivilliputhur Palkova",
        price: 199,
        originalPrice: 239,
    },
    {
        id: 3,
        image: kadalaiPetti,
        product: "Kadalai Mittai Jumbo Box",
        price: 999,
        originalPrice: 1299,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
        product: "Coconut Burfi",
        price: 199,
        originalPrice: 239,
    },
    {
        id: 5,
        image: jumboPetti,
        product: "Jumbo Native Sweets Petti",
        price: 1899,
        originalPrice: 2299,
    },
    {
        id: 6,
        image: kadalaiPlate,
        product: "Kadalai Mittai 200g",
        price: 199,
        originalPrice: 239,
    },
    {
        id: 7,
        image: palkovaPetti,
        product: "Palkova Gift Petti",
        price: 1799,
        originalPrice: 1949,
    },
];

const Glimpse = () => {
    return (
        <section className="glimpse-section">
            <div className="glimpse-container">
                <h2 className="glimpse-title" data-aos="fade-up">
                    A Glimpse Of Our South India's Culinary Delights
                </h2>

                <div className="glimpse-swiper-wrap" data-aos="fade-up">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView={5}
                            centeredSlides={true}
                            spaceBetween={16}
                            navigation={{
                                nextEl: '.glimpse-next',
                                prevEl: '.glimpse-prev',
                            }}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            loop={true}
                            loopedSlides={5}
                            loopAdditionalSlides={2}
                            observer={true}
                            observeParents={true}
                            speed={600}
                            className="glimpse-swiper"
                            breakpoints={{
                                0:    { slidesPerView: 1.5, spaceBetween: 12 },
                                640:  { slidesPerView: 3,   spaceBetween: 14 },
                                1024: { slidesPerView: 5,   spaceBetween: 16 },
                            }}
                        >
                        {glimpseItems.map((item) => (
                            <SwiperSlide key={item.id} className="glimpse-slide">
                                {({ isActive }) => (
                                    <div className={`glimpse-card ${isActive ? 'glimpse-active' : ''}`}>
                                        <img
                                            src={item.image}
                                            alt={item.product}
                                            className="glimpse-img"
                                        />
                                        {isActive && (
                                            <div className="glimpse-overlay">
                                                <div className="glimpse-product-info">
                                                    <img
                                                        src={item.image}
                                                        alt={item.product}
                                                        className="glimpse-thumb"
                                                    />
                                                    <div className="glimpse-text">
                                                        <p className="glimpse-name">{item.product}</p>
                                                        <p className="glimpse-price">
                                                            ₹{item.price}{' '}
                                                            <span className="glimpse-original">₹{item.originalPrice}</span>
                                                        </p>
                                                    </div>
                                                    <button className="glimpse-add-btn">Add</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <button className="glimpse-prev glimpse-nav">‹</button>
                    <button className="glimpse-next glimpse-nav">›</button>
                </div>
            </div>
        </section>
    );
};

export default Glimpse;
