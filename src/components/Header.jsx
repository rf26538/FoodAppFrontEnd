import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
    const [btnName, setBtnName] = useState("LogIn");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
                <div className="logo-container">
                    <img className="w-34" src={LOGO_URL} />   
                </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <button className="cursor-pointer"
                        onClick={() => {
                           btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
                        }} 
                    >{ btnName }</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;