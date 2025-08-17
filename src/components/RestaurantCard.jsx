import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating
    } = resData;

    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId }/>
            <h3>{ name }</h3>
            <h4>{ cuisines.join(", ") }</h4>
            <h4>{ avgRating } - {resData.sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;