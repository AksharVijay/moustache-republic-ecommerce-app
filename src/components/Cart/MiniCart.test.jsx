import { render, screen } from "@testing-library/react";
import { describe, test, expect} from "vitest";
import MiniCart from "./MiniCart";

describe("MiniCart", () => {
  test("displays correct total price", () => {
    const mockItems = [
      {
        id: 1,
        title: "Classic Tee",
        image: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
        price: 75,
        size: { id: 1, label: "S" },
        quantity: 2,
      },
    ];

    render(<MiniCart cartItems={mockItems} />);

    expect(
      screen.getByText("Total: $150.00")
    ).toBeInTheDocument();
  });

  test("Throws an empty cart message when the cart is empty!", () => {
    render(<MiniCart cartItems={[]} />);

    expect(
      screen.getByText("Your cart is empty")
    ).toBeInTheDocument();
  });
});
