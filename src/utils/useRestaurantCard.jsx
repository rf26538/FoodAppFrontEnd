import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantCard = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);

    console.log(listOfRestaurants.length);
    
    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        
        const data = await fetch(API_URL);

        const json = await data.json();
        
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterdRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return {
        listOfRestaurants,
        setListOfRestaurants,
        filterdRestaurants,
        setFilterdRestaurants
    };
}

export default useRestaurantCard