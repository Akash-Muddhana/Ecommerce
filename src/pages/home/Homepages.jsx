import { Header } from "../../components/header.jsx";
import "./Homepages.css";
import { ProductsGrid } from "./products-gird.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

export function Homepages({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
