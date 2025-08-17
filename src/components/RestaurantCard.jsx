import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.error(resData);
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        sla
    } = resData?.info;

    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{ avgRating } - {sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;