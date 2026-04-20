import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Categories from '../components/Categories';
import FeaturesBar from '../components/FeaturesBar';
import About from '../components/About';
import Products from '../components/Products';
import Snacks from '../components/Snacks';
import PaatiCorner from '../components/PaatiCorner';
import Reviews from '../components/Reviews';
import Glimpse from '../components/Glimpse';
import Traditions from '../components/Traditions';

const Home = () => {
    return (
        <main>
            <Hero />
            <Marquee />
            <Categories />
            <FeaturesBar />
            <About />
            <Products />
            <Snacks />
            <PaatiCorner />
            <Reviews />
            <Glimpse />
            <Traditions />
        </main>
    );
};

export default Home;
