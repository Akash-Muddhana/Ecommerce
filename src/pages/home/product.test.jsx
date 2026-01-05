import { it, expect, describe, vi, beforeEach } from "vitest";
import { Product } from "./product";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
vi.mock("axios");

describe("product component", () => {
  let product;
  let loadcart;
  let user;

  beforeEach(() => {
    product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };
    loadcart = vi.fn();
    user = userEvent.setup();
    render(<Product product={product} loadcart={loadcart} />);
  });
  it("displays the product details corrects", () => {
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();
    expect(screen.getByText("$10.90")).toBeInTheDocument();

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg"
    );
    expect(screen.getByTestId("product-rating-stars")).toHaveAttribute(
      "src",
      "images/ratings/rating-45.png"
    );
    expect(screen.getByText("87")).toBeInTheDocument();
  });
  it("adds a button to the cart", async () => {
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });
    expect(loadcart).toHaveBeenCalled();
  });
  
  it("quantity selector", async () => {
    const quantitySelector = screen.getByTestId("quantity-selector");
    await user.selectOptions(quantitySelector, "3");
    expect(quantitySelector).toHaveValue("3");
  });
  it("cart button working", async () => {
     const addToCartButton= screen.getByTestId('add-to-cart-button')
     
     const quantitySelector = screen.getByTestId('quantity-selector');


    await user.selectOptions(quantitySelector, '3');
        await user.click(addToCartButton)
      expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 3,
  });

  expect(loadcart).toHaveBeenCalled();


  });
});
