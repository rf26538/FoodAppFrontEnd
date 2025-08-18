import { useState, useEffect } from "react";
import { API_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(API_MENU_URL);
        const json = await data.json();
        console.log(json);   

        setResInfo(json.data);
    }
  
    if(resInfo === null) return <Shimmer /> ;

    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2].card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

  return (
    <div className='menu'>
        <h1>{ name }</h1>
        <p>{ cuisines.join(", ")} - { costForTwoMessage }</p>
        <ul>
            {
                itemCards.map((item) => ( <li key={item.card.info.id}>{ item.card.info.name} - Rs.{ item.card.info.price / 100 } </li> ))
            }
        </ul>
    </div>
  )
}

export default RestaurantMenu;
