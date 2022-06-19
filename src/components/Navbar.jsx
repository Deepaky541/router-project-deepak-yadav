import React from 'react'
import "./css/navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x@2x.png?v=1600190052"
          alt="logo"
        />
      </div>
      <div className="header">
        <p>Tanner Goods</p>
        <p>Mazama Wares</p>
        <p>Featured Collections</p>
        <p>Final Sale</p>
      </div>
      <div className="func">
        <p>login</p>
        <Link style={{textDecoration:"none"}} to="/about"><p>About Us</p></Link>
        <Link style={{textDecoration:"none"}} to="/cart"><p>cart</p></Link> 
      </div>
    </div>
  );
}
