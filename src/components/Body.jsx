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
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={ searchText } onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    } />
                    <button className="px-4 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                                const filterdRestaurents = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setFilterdRestaurants(filterdRestaurents);
                            }
                        }
                    >Search</button>
                </div>
                <div className="m-4 p-4 flex item-center">
                    <button className="px-2 bg-gray-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            )
                            setFilterdRestaurants(filteredList);
                            console.log(filteredList);
                            
                        }}
                    >Top Rated Resturants</button>
                </div>
            </div>
            {/* <div className="search">Search</div> */}
            <div className="flex flex-wrap">
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