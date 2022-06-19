import React from 'react'
import { Navbar } from '../components/Navbar'
import { Carouselitem } from '../components/Carouselitem'
import { Trending } from '../components/Trending'
import { Categories } from '../components/Categories'
import { Bestsellers } from '../components/Bestsellers'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Carouselitem />
        <Trending />
        <Categories />
        <Bestsellers />
    </div>
  )
}
