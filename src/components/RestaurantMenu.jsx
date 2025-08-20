import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "../components/RestaurantCatagory"
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, SetShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const catagories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log(catagories);
  

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name || "Restaurant not found"}</h1>
      { cuisines.length ? <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p> : <p>No details available</p> }
      {/* <ul> 
        {
            itemCards.length > 0 ? itemCards.map((item) => (
                <li key={item.card.info.id}>
                {item.card.info.name} - Rs.{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </li>
            )) : <li>No items available</li>
        }
      </ul> */}
      {
        catagories.map((catagory, index) => (
          //Controlled component
          <RestaurantCatagory 
            key={catagory?.card?.card?.categoryId}
            data={catagory?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => SetShowIndex(index === showIndex ? null : index )}
          />
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
 