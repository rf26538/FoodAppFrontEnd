import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import { createBrowserRouter, RouterProvider } from "react-router";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body/>
        </>
    )
}

// const AppRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout />
//     },
//     {
//         path: "/about",
//         element: <AppLayout />
//     },
// ])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />);