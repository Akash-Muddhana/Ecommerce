import { CheckoutHeader } from "./checkoutHeader";
import "./checkoutHeader.css";
import "./checkout.css";
import { OrderSummary } from "./orderSummary.jsx";
import { useState, useEffect } from "react";
import { PaymentSummary } from "./paymentSummary.jsx";
import axios from "axios";
import { Link } from "react-router";
export function Checkout({ cart, loadcart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const checkoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );

      setDeliveryOptions(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    checkoutData();
  }, [cart]);
  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadcart={loadcart}
          />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
