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
    <div className='allcategories'>
        <div className='cen'>
      <div  className='textt'>
        <h2>We Created Products Worth Holding Onto</h2>
        <p>
          The products we use on a daily basis say something about the people we
          are. We believe many things in life get better with time; it is that
          spirit we try to infuse in everything we create. In a world where we
          are overwhelmed by products made to break down or go out style, we aim
          to go against that grain.
        </p>
      </div></div>
      <div className="categories">
        {array.map((el) => (
          <Category data={el} />
        ))}
      </div>
    </div>
  );
}
