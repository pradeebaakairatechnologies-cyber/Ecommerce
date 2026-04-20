import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Categories from './components/Categories'
import FeaturesBar from './components/FeaturesBar'
import About from './components/About'
import Products from './components/Products'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <TopHeader />
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <FeaturesBar />
      <About />
      <Products />
    </>
  )
}

export default App
