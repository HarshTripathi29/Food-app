import React,{useState} from 'react';
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer.js';
import ItemList from './ItemList.js';
import "../App.css";



const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  
  const handleClick=()=>{
    // setShowItems(!showItems);
    setShowIndex();
  };
 
console.log(data);

return(
    <div >
      <span className='categoryTitle' onClick={handleClick}>{data.title} ({data.itemCards.length})</span>
      <span>{":"}drop</span>
      {showItems && <ItemList items = {data.itemCards}/>}
    </div>  
  )
}

export default RestaurantCategory
