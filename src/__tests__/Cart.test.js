import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/RestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);

it("Should show restaurant menu component", async () => {
    await act( async () => render(
        <Provider store={appStore}>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
            <RestaurantMenu />
        </Provider> 
    ))

    const accordionHeader = screen.getByText("Rolls (15)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(15);

    const addBtns = screen.getAllByRole("button", {name : "Add +"});
    fireEvent.click(addBtns[0]);

    const cartInfo = screen.getByText("Cart-1 items");
    // console.log(cartInfo)

    expect(cartInfo).toBeInTheDocument();

})