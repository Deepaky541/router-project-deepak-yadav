import React from 'react'
import {Category} from "./Category"
import "./css/categories.css";

export const Categories = () => {
    const array = [
      {
        url: "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Ads-Native-600-600-02_1512x.jpg?v=1637739952",
        text: "Belt",
      },
      {
        url: "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Wallet-Studio-Lifestyle-02_1512x.jpg?v=1637739996",
        text: "Wallets",
      },
      {
        url: "https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Collection-Mazama-Tableware_5c9a75d2-907e-4bc0-ad6f-f3a3179cd975_1512x.jpg?v=1637736288",
        text:"Tableware"
      },
    ];
  return (
    <div className='categories'>
     {array.map((el)=>(<Category data={el} />))}
    </div>
  )
}
