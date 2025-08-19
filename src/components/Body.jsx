import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import useRestaurantCard from "../utils/useRestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const {
        listOfRestaurants,
        setListOfRestaurants,
        filterdRestaurants,
        setFilterdRestaurants
    } = useRestaurantCard();

    const [searchText, setSearchText] = useState([]);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection;
            </h1>
        )
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