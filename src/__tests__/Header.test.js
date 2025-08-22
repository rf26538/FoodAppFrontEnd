import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import "@testing-library/jest-dom";

it("Should load header component with login button", () => {
    render(
        <Provider store={appStore} >
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Provider>
    );

    const loginButton = screen.getByRole("button", { name : "LogIn"});

    expect(loginButton).toBeInTheDocument();
});

it("Should render header component with cart item zero", () => {
    render(
        <Provider store={appStore} >
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Provider>
    );

    const cartItems = screen.getByText("Cart-0 items");

    expect(cartItems).toBeInTheDocument();
});

it("Should render header component with cart item zero", () => {
    render(
        <Provider store={appStore} >
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Provider>
    );

    // With regwx we do not need to find exact string
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

//Click event test
it("Should change login button to logout", () => {
    render(
        <Provider store={appStore} >
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Provider>
    );

    const LogIn = screen.getByRole("button", { name : "LogIn"});

    fireEvent.click(LogIn)

    const logOut = screen.getByRole("button", { name : "LogOut"});

    expect(logOut).toBeInTheDocument();
});