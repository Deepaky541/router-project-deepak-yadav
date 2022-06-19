import React from 'react'
import "./css/category.css"

export const Category = ({data}) => {
  return (
    <div className='category'>
      <img
        className="image"
        src={data.url}
        alt="category"
      />
      <div className='text'>
          <h1>{data.text}</h1>
          <button>SHOP NOW</button>
      </div>
    </div>
  );
}
