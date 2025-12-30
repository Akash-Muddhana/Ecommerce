import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import "./orders.css";
import { Header } from "../../components/header.jsx";
import { OrdersGrid } from "./ordersGrid.jsx";
export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    getOrdersData();
  }, []);
  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders}/>
      </div>
    </>
  );
}
