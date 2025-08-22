import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("Should load text inside contact us component", () => {
    render(<Contact />);
    const Submit = screen.getByText("Submit");
    expect(Submit).toBeInTheDocument();
});

test("Should load input name inside contact us component", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("Please enter your name");
    expect(name).toBeInTheDocument();
});

//Group testCases and we can nested dribe group

describe("Input test cases for contact us", () => {
    //  insted of test we can write it (that is same)
    it("Should load 2 input boxes inside contact us component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes);
        
        expect(inputBoxes.length).toBe(2);
    })
    
    test("Should load 2 input boxes inside contact us component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);
        
        expect(inputBoxes.length).not.toBe(3);
    })
})
