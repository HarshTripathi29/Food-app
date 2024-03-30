import { useEffect, useState } from "react"
import {resId} from "../components/RestaurantMenu.js"

const useRestaurantMenu = (resId)=>{

    const[resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    async function fetchMenu()
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.49870&lng=77.66690&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        console.log(data);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo
}

export default useRestaurantMenu