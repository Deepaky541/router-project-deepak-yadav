import React from 'react'
import "./css/navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
        <img src="" alt="logo" />
        </div>
        <div className='header'>
        <p>tannergoods</p>
        <p>mazamawares</p>
        <p>featuredcollections</p>
        <p>finalsale</p>
        </div>
        <div className='func'>
            <p>login</p>
            <p>search</p>
            <p>cart</p>
        </div>
    </div>
  )
}
