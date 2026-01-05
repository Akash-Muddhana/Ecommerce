import { it, expect, describe, vi, beforeEach} from "vitest";
import { Product } from "./product";
import { render, screen ,within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Homepages } from "./Homepages";
import { data } from "react-router";
import { MemoryRouter } from "react-router";
vi.mock("axios");
describe("HomePage component", () => {
  let loadcart;
  beforeEach(() => {
    loadcart = vi.fn();
    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath === "/api/products") {
        return {
          data: [
            {
              id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              image: "images/products/athletic-cotton-socks-6-pairs.jpg",
              name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
              rating: {
                stars: 4.5,
                count: 87,
              },
              priceCents: 1090,
              keywords: ["socks", "sports", "apparel"],
            },
            {
              id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              image: "images/products/intermediate-composite-basketball.jpg",
              name: "Intermediate Size Basketball",
              rating: {
                stars: 4,
                count: 127,
              },
              priceCents: 2095,
              keywords: ["sports", "basketballs"],
            },
          ],
        };
      }
    });
  });

  it("displays the product correct", async() => {
    render(
      <MemoryRouter>
        <Homepages cart={[]} loadcart={loadcart} />
      </MemoryRouter>
    );
    const productContainer=await screen.findAllByTestId('product-container')
    expect(productContainer.length).toBe(2)
    expect(
            within(productContainer[0]).getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
    ).toBeInTheDocument()
    
  });

});
