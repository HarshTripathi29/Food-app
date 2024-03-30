import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from './RestaurantCategory.js';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {IMAGE_CDN_URL} from "../config.js";
// import Shimmer from './Shimmer.js';
// import useRestaurant from "../utils/useRestaurant.js";

const RestaurantMenu =()=>{

  const[showIndex, setShowIndex] = useState(1);

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resId);

  if(resInfo===null) return <Shimmer/> ;

  const {name, cuisines, locality, costForTwoMessage, avgRating} =
  (resInfo?.cards[2]?.card?.card?.info);

  
  const {itemCards} = 
(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
  
console.log(itemCards);
  
const categories = 
  (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
  
  console.log(categories);
  
  return(
  <>
    <h1>{name}</h1>
    <h3>cuisines : {cuisines.join(",")}</h3>
    <h3>Locality : {locality}</h3>
    <h4>{costForTwoMessage}</h4>
    <h4>{avgRating}</h4>
    <p>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemsCards?.card?.info?.name}</p>
    <h2>Menu</h2>
    

    {categories?.map((category, index) => (
    <RestaurantCategory 
    key = {categories?.card?.card?.title}
    data = {category?.card?.card} 
    showItems={index==showIndex && true}
    setShowIndex={()=>setShowIndex(index)}
    />
    ))}
  </>
  );
};

export default RestaurantMenu;
















// const RestaurantDetails = () => {
 
//     const {resId} = useParams();
//     console.log(resId);

//     const restaurant = useRestaurant(resId);

//   return !restaurant? (<Shimmer/>) : 
//    (
//     <div>
//     <div>
//       {/* <h1>Restaurant Id : {resId}</h1> */}
//       <h2>{restaurant.name}</h2>
//       <img src={IMAGE_CDN_URL + restaurant?.cloudinaryImageId}/>
//       <h3>{restaurant?.area}</h3>
//       <h3>{restaurant?.avgRating}</h3>
//       <h3>{restaurant?.city}</h3>
//       <h3>{restaurant?.costForTwoMsg}</h3>
//     </div>
//     <div>
//     {/* <h2>menu</h2>
//         <ul>
//             {Object.values(restaurant?.menu?.items).map((items)=>{
//               <li key={items.id}>{items.name}</li>
//             })}
//         </ul> */}
//     </div>
//     </div>
//   )
// }
// export default RestaurantDetails
