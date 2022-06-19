import React from 'react'
import "./css/cardd.css";

export const Cardd = ({data}) => {
  console.log(data.id);
  return (
  <div className='cardd'>
    <img src={data.url} alt="" />
    <div className='cardtext'>
    <h6>{data.title}</h6>
    <p>{data.company}</p>
    <p>${data.price}</p>
  </div>
  </div>
  )
}
