import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/RestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import Cart from "../components/Cart"

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

    expect(screen.getByText("Cart-1 items")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(0);

    // expect(
    //     screen.getAllByText("Cart is empty Add Items to the cart!").toBeInTheDocument()
    // );

})