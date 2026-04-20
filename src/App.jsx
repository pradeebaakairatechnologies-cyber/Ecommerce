import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

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
    </>
  )
}

export default App
