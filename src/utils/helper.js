export function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant)=>
     restaurant?.info?.name?.includes(searchText)
    );
    console.log(filterData);
    return filterData;
  }