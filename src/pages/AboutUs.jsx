import React from 'react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Shipping } from '../components/Shipping'
import "./aboutus.css";

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
    <div className='aboutus'>
      <Shipping />
      <About />
      <Footer />
    </div>
    </div>
  )
}
