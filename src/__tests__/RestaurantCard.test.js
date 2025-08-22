import RestaurantCard from "../components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/RestaurantCard.json";
import "@testing-library/jest-dom";

it("should render component with prop data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument()
})

it("should render restaurent card component with promoted lable", () => {
    
})