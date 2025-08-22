import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo
    } = resData;

    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img alt="res-logo" className="rounded-lg" src={CDN_URL + cloudinaryImageId }/>
            <h3 className="font-bold py-2 text-lg">{ name }</h3>
            <h4>{ cuisines.join(", ") }</h4>
            <h4 className="bg-yellow-100">{ costForTwo }</h4>
            <h4 className="text-green-800">⭐{ avgRating } - {resData.sla.slaString}</h4>
        </div>
    )
}

// Input - RestaurentCard => restaurantCardPromoted(Higher order component)

export const WithLoveLable = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <span className="absolute bg-black text-white m-1 p-1 rounded-lg">Loved By Most</span>
                <RestaurantCard {...props}/>
            </div>
        )
    }

}

export default RestaurantCard;