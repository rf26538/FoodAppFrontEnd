import { useState, useEffect } from "react";
import { API_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]); // refetch if id changes

  const fetchMenu = async () => {
    try {
      const data = await fetch(API_MENU_URL + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
      setResInfo(null);
    }
  };

  if (!resInfo) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name || "Restaurant not found"}</h1>
      { cuisines?.length ? <p>{cuisines.join(", ")} - {costForTwoMessage}</p> : <p>No details available</p> }
      <ul> 
        {
            itemCards.length > 0 ? itemCards.map((item) => (
                <li key={item.card.info.id}>
                {item.card.info.name} - Rs.{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </li>
            )) : <li>No items available</li>
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
