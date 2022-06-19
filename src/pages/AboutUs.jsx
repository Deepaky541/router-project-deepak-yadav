import React from 'react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Shipping } from '../components/Shipping'

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Shipping />
      <About />
      <Footer />
    </div>
  )
}
