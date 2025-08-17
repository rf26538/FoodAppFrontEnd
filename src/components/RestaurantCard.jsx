import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={
                CDN_URL + "vkhcohhmqfczycw9vsar"}/>
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.starRating } - {props.timing}</h4>
        </div>
    )
}

export default RestaurantCard;