import React from 'react'
import "./css/cardd.css";

export const Cardd = ({data}) => {

  return (
  <div className='card'>
    <img src={data.url} alt="" />
    <h6>{data.title}</h6>
    <p>{data.company}</p>
    <p>${data.price}</p>
  </div>
  )
}
