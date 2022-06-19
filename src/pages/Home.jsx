import React from 'react'
import { Navbar } from '../components/Navbar'

import { Carouselitem } from '../components/Carouselitem'
import { Trending } from '../components/Trending'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Carouselitem />
        <Trending />
    </div>
  )
}
