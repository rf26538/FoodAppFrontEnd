import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { set } from "mongoose";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);

        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setListOfRestaurants(filteredList);
                        console.log(filteredList);
                        
                    }}
                >Top Rated Resturants</button>
            </div>
            {/* <div className="search">Search</div> */}
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) =>  (  
                        <RestaurantCard key={restaurant.info.id}  resData={restaurant.info} /> 
                    ))
                }
            </div>
        </div>  
    )

}

export default Body;