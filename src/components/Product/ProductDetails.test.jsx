import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import ProductDetails from "./ProductDetails";

const mockProduct = {
  id: 1,
  title: "Classic Tee",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  price: 75,
  imageURL: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
  sizeOptions: [
    { id: 1, label: "S" },
    { id: 2, label: "M" },
  ],
};

describe("ProductDetails", () => {
  test("Throws an error when user clicks on Add to cart without selecting the size", () => {
    const mockAddToCart = vi.fn();

    render(
      <ProductDetails
        product={mockProduct}
        addToCart={mockAddToCart}
      />
    );

    fireEvent.click(screen.getByText("Add to Cart"));

    expect(
      screen.getByText("Please select a size")
    ).toBeInTheDocument();

    expect(mockAddToCart).not.toHaveBeenCalled();
  });

  test(" addToCart will be called when size is selected", () => {
    const mockAddToCart = vi.fn();

    render(
      <ProductDetails
        product={mockProduct}
        addToCart={mockAddToCart}
      />
    );

    fireEvent.click(screen.getByText("S"));
    fireEvent.click(screen.getByText("Add to Cart"));

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
