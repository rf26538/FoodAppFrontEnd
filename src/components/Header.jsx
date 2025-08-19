import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    const [btnName, setBtnName] = useState("LogIn");

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
                <div className="logo-container">
                    <img className="w-34" src={LOGO_URL} />   
                </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 underline"><Link to="/">Home</Link></li>
                    <li className="px-4 underline"><Link to="/about">About Us</Link></li>
                    <li className="px-4 underline"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 underline"><Link to="/cart">Cart</Link></li>
                    <li className="px-4 underline"><Link to="/grocery">Grocery</Link></li>
                    <button className="cursor-pointer"
                        onClick={() => {
                           btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
                        }}
                    >{ btnName }</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;