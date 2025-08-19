import { useState, useEffect } from "react";
import { API_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    // fetch data

    useEffect(() => {
        fetchMenu();
    }, [resId]);

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
  }
    return resInfo;
}

export default useRestaurantMenu;