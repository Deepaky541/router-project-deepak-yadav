import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutUs } from '../pages/AboutUs'
import { ContactUs } from '../pages/ContactUs'
import { Home } from '../pages/Home'

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
