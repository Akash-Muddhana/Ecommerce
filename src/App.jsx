import { Routes, Route } from "react-router";
import { Homepages } from "./pages/home/Homepages";
import "./App.css";
import { Checkout } from "./pages/checkout/Checkout";
import { Orders } from "./pages/orders/Orders";
import { Tracking } from "./pages/tracking/Tracking";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getAppData = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/cart-items?expand=product"
      );
      setCart(response.data);
    };
    getAppData();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepages cart={cart} />} />
        <Route path="checkout" element={<Checkout cart={cart} />} />
        <Route path="orders" element={<Orders cart={cart} />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
