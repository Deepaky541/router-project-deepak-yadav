import React from 'react'
import "./css/banner.css"

export const Banner = () => {
  return (
    <div className='banner'>
      <img
        src="https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Layover-Duffel-Field-Tan-Lifestyle-Hero_0c6d719d-5872-443f-98ed-c2385c913e4f_2808x.jpg?v=1635796299"
        alt=""
      />
      <h1 className='bannertext'>Free US Shipping</h1>
      <p className='bannertext2'>Domestic orders over $199 ship for free.</p>
    </div>
  );
}
