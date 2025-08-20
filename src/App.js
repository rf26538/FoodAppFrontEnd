import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Rehan Fazal",
        }
        setUserName(data.name);
    })

    return (
        <userContext.Provider value={{loggedInUser : userName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </userContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />,
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h2>Loading......</h2>}><Grocery /></Suspense>
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />);