import React from 'react';
import {IMAGE_CDN_URL}  from "../config.js";
import "../App.css";

const ItemList = ({items}) => {
    console.log(items);
  return (
    <div> 
      <div className='outerItems'>
      {items.map((item)=>(
        <div key={item.card.info.id} className='itemList'>
            <div className='innerItems'>
            <div>
            <span><h3>{item.card.info.name} : {" Rs."}</h3></span>
            <span>{item.card.info.price}</span>
            </div>
            <div>{item.card.info.description}</div> 
            </div>
            <img src={IMAGE_CDN_URL + item.card.info.imageId} className='itemImage'/>
            </div>  
      ))}
      </div>
    </div>
  );
};

export default ItemList
