import { sum } from "../components/sum";

test("Sum function should calculate the sum of two function", () => {

    const result = sum(5, 4);

    //Assertion
    expect(result).toBe(9);

});