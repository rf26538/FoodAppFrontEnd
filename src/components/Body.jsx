import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);

    const [searchText, setSearchText] = useState([]);

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
    
    // We are doing conditional rendaring
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={ searchText } onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    } />
                    <button className="search-btn"
                        onClick={() => {
                                const filterdRestaurents = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setFilterdRestaurants(filterdRestaurents);
                            }
                        }
                    >Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setFilterdRestaurants(filteredList);
                        console.log(filteredList);
                        
                    }}
                >Top Rated Resturants</button>
            </div>
            {/* <div className="search">Search</div> */}
            <div className="res-container">
                {
                    filterdRestaurants.map((restaurant) =>  (  
                        <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}><RestaurantCard  resData={restaurant.info} /></Link> 
                    ))
                }
            </div>
        </div>  
    )

}

export default Body;