import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Cardd } from './Cardd'
import "./css/trending.css"

export const Trending = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
    axios({url:"http://localhost:8080/item"})
    .then((res)=>{setdata(res.data);console.log(res.data)})
    
    }, [])
    
  return (
    <div className="trend">
      <div className="viewall">
        <h2>Trending Right Now</h2>
        <button>VIEW ALL</button>
      </div>
      <div className="trending">        
        {data.map((el) => (
          <Cardd data={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}
