import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
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