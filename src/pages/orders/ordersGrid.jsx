import { Fragment } from "react";
import { NavLink } from "react-router";
import { OrderHeader } from "./orderHeader";
import { OrderDetailsGrid } from "./orderDetailsGrid";
export function OrdersGrid({orders,loadcart}){
    return(
        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <OrderHeader order={order}/>

               <OrderDetailsGrid order={order} loadcart={loadcart}/>
              </div>
            );
          })}
        </div>
    )
}