import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" />   
                </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"/>
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.starRating } - {props.timing}</h4>
        </div>
    )
}

//Destructuring on the fly Above and both are same
const RestaurantCard1 = ({resName, cusine, starRating, timing}) => {
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"/>
            <h3>{resName}</h3>
            <h4>{cusine}</h4>
            <h4>{starRating } - {timing}</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Hotel Sai Nath" cusine="North indian" starRating="4.4" timing="30-45 mints" />
                <RestaurantCard resName="Sai Restaurant" cusine="South indian" starRating="4.0" timing="28-35 mints" />
            </div>
        </div>  
    )

}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />);