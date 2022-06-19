import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Cardd } from './Cardd'
import "./css/bestsellers.css"

export const Bestsellers = () => {
    const [seller, setseller] = useState([])
    useEffect(() => {
    axios({ url: "http://localhost:8080/bestseller" })
    .then((res)=>{
        setseller(res.data);
        console.log(res.data);
    })
    }, [])
    
  return (
    <div className='best' >
        <h1>Our Best Sellers</h1>
        <div className='bestsellers'>
      {seller.map((el)=>(<Cardd data={el} />))}
    </div>
    <button>VIEW ALL</button>
    </div>
  )
}
