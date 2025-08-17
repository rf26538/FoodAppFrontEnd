import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Hotel Sai Nath" cusine="North indian" starRating="4.4" timing="30-45 mints" />
                <RestaurantCard resName="Sai Restaurant" cusine="South indian" starRating="4.0" timing="28-35 mints" />
            </div>
        </div>  
    )

}

export default Body;