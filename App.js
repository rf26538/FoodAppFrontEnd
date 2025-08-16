import React from "react";
import ReactDOM from "react-dom/client";


const AppLayout = () => {
    return (
        <div className="heading">
                <div className="logo-container">
                    <img className="logo" src="./logo.png" />   
                </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />);