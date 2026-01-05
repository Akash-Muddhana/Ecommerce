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
 const loadcart = async () => {
  try {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(Array.isArray(response.data) ? response.data : []);
  } catch (err) {
    console.error(err);
    setCart([]);
  }
};

  useEffect(() => {
    loadcart();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Homepages cart={cart} loadcart={loadcart} />}
        />
        <Route
          path="checkout"
          element={<Checkout cart={cart} loadcart={loadcart} />}
        />
        <Route
          path="orders"
          element={<Orders cart={cart} loadcart={loadcart} />}
        />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
