import React from 'react'
import "./css/footer.css"
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="tannergoods">
          <p>T A N N E R G O O D S</p>
          <p>
            In a world where we are overwhelmed by products made to break down
            or go out of style,we aim to go against that grain.
          </p>
         <Link to="/about"><button>About Us</button></Link> 
        </div>
        <div className="support">
          <p>S U P P O R T</p>
          <Link to="/contact"><p>Contact Us</p></Link>
          <p>Shipping</p>
          <p>Returns and Exchange</p>
          <p>Replacements and Repairs</p>
          <p>Careers</p>
        </div>
        <div className="shop">
            <p>S H O P</p>
          <p>Mazama</p>
          <p>Best Sellers</p>
          <p>New Arrivals</p>
          <p>Wallets</p>
          <p>Belts</p>
          <p>Bags</p>
          <p>Final Sale</p>
        </div>
        <div className="loop">
          <p>STAY IN THE LOOP</p>
          <p>
            Subscribe to receive exclusive offers and be the first to know of
            new product releases.
          </p>
          <input type="text" />
        </div>
      </div>
      <div className="footer2">
        <p>© 2022 Tanner Goods | Terms | Privacy Policy</p>
      </div>
    </div>
  );
}
