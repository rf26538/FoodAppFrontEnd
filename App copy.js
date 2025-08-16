import React from "react";
import ReactDOM from "react-dom/client";


// React element
const heading = React.createElement(
    "h1",
    {
        id:"title",
        key: "h1"
    },
    "Namste React"
);

const heading2 = (
    "h1",
    {
        id:"title",
        key: "h1"
    },
    "Namste React"
);

//functional component

const Heading3 = () => (
    "h1",
    {
        id:"title",
        key: "h1"
    },
    "Namste Bro"
);

const Heading4 = () => (
     <div>
        {heading2}
        <br/>
        <Heading3/>
        <h1>Hello world</h1>
        <h2>Hello world 2</h2>
    </div>
)

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading4/>);