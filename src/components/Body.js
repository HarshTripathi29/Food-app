import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import { Link } from 'react-router-dom';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  useEffect(()=>{
    getRestaurants();
  },[])

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(allRestaurants);
  }
  
// check if the user is offline
  // const isOffline = useOnline();
  // if(isOffline){
  //   return <h2>You are offline , please check your connection </h2>
  // }

  //not render any component (early return)
  if(!allRestaurants) return null;

  return (allRestaurants.length==0)? <Shimmer/>
  : (
    <>
    <div className="search-box">
      <input
        className='search-input'
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
      />
      <button 
      className='search-btn'
      onClick={()=>{
        //need to filter data
        const data = filterData(searchText, allRestaurants);
        //update the state - restaurants
        setFilteredRestaurants(data);
      }}
      >
        search
      </button>
    </div>
    <div className='restuarant-list'>
      {filteredRestaurants.map((restaurant)=>{
        let res = restaurant.info
        return (
          <Link 
          key={res.id}
          to={"restaurant/" + res.id}>
          <RestaurantCard 
          data = {res} key={res.id} 
          cloudinaryImageId={res.cloudinaryImageId} 
          name={res.name}
          area={res.locality} costForTwoString={res.costForTwo} />
          </Link>
        );
      })
      }
      </div>
    </>
  );
};
export default Body