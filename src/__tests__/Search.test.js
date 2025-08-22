const { render, screen, fireEvent } = require("@testing-library/react");
import Body from "../components/Body";
import MOCK_DATA from "../mocks/RestaurantListData.json";
import { act } from "react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render the body component with search button", async () => {
    await act(async () => render(
        <MemoryRouter>
            <Body />
        </MemoryRouter>
    ))

    const searchBtn = screen.getByRole("button", {name : "Search"});
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: {value: "Subway"} });

    fireEvent.click(searchBtn);
    // expect(searchBtn).toBeInTheDocument();

    const cards = screen.getAllByTestId("resCard");
    
    expect(cards.length).toBe(1)
});