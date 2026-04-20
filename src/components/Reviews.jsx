import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Star } from 'lucide-react';
import './Reviews.css';

const reviews = [
    {
        id: 1,
        title: "Authentic Flavour Till Last Bite",
        review: "The taste speaks for itself, it feels right out of the kitchen the moment you take the first bite, simply authentic!",
        name: "Anisha Sharma",
        role: "IT Professional, Bangalore",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
    },
    {
        id: 2,
        title: "Superb Shelf Life",
        review: "We make sure to have any one of their product always in our shelves, must must have in your kitchen if you have a sweet tooth.",
        name: "Abhishek Kapoor",
        role: "Manager, Global Bank",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
    },
    {
        id: 3,
        title: "Good Sturdy Packaging",
        review: "I always keep travelling for work and hence keep one box, even opened in my suitcase, and they are completely travel friendly.",
        name: "Gaurav Singh",
        role: "Design Head, New Delhi",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        rating: 5,
    },
    {
        id: 4,
        title: "Best Palkova I Have Ever Had",
        review: "Reminded me of my grandmother's kitchen. The Srivilliputhur Palkova is absolutely divine, melt-in-mouth texture!",
        name: "Priya Rajan",
        role: "Teacher, Chennai",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
    },
    {
        id: 5,
        title: "Kadalai Mittai is Addictive!",
        review: "I ordered the peanut candy for my kids and now even I can't stop eating it. The crunch and sweetness is perfectly balanced.",
        name: "Ramesh Kumar",
        role: "Business Owner, Coimbatore",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 5,
    },
    {
        id: 6,
        title: "Perfect Gift for Family",
        review: "Sent the native sweets box to my parents in Kerala. They loved every single piece. Felt like sending home a taste of Tamil Nadu!",
        name: "Deepa Nair",
        role: "Software Engineer, Kochi",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 5,
    },
    {
        id: 7,
        title: "Delivered Fresh & On Time",
        review: "Ordered during festival season and was surprised by the quick delivery. Everything was neatly packed and tasted incredibly fresh.",
        name: "Suresh Babu",
        role: "Retired Officer, Madurai",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        rating: 5,
    },
    {
        id: 8,
        title: "Tastes Like Home",
        review: "Living abroad and craving native sweets is tough. VSS Kadalai Mittai solved that problem completely. Pure comfort in every bite.",
        name: "Kavitha Murali",
        role: "NRI, Singapore",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 5,
    },
    {
        id: 9,
        title: "100% Natural, Zero Compromise",
        review: "No artificial colors, no preservatives — you can actually taste the difference. My whole family switched to VSS sweets permanently.",
        name: "Vikram Iyer",
        role: "Nutritionist, Hyderabad",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 5,
    },
];

const Reviews = () => {
    return (
        <section className="reviews-section">
            <div className="reviews-container">
                <div className="reviews-header" data-aos="fade-up">
                    <h2 className="reviews-title">
                        Verified, <strong>Honest Reviews</strong>
                    </h2>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.review-next',
                        prevEl: '.review-prev',
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    speed={600}
                    className="reviews-swiper"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        900: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} className="review-slide">
                            {({ isActive }) => (
                                <div className={`review-card ${isActive ? 'active-card' : ''}`}>
                                    {/* Stars */}
                                    <div className="review-stars">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={20} fill="#e29513" color="#e29513" />
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="review-heading">{review.title}</h3>

                                    {/* Review Text */}
                                    <p className="review-text">{review.review}</p>

                                    {/* Reviewer */}
                                    <div className="reviewer-info">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="reviewer-avatar"
                                        />
                                        <div>
                                            <p className="reviewer-name">{review.name}</p>
                                            <p className="reviewer-role">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation */}
                <div className="review-navigation">
                    <button className="review-prev review-nav-btn">←</button>
                    <button className="review-next review-nav-btn">→</button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
