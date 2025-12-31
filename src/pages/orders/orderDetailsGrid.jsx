import { Fragment } from "react";
import { NavLink} from "react-router";
import dayjs from "dayjs";
import axios from "axios";
export function OrderDetailsGrid({order,loadcart}){

    return(
     <div className="order-details-grid">
      
                  {order.products.map((orderproduct) => {
                     const addToCart=async ()=>{
                      await axios.post('/api/cart-items',{
                        productId:orderproduct.product.id,
                        quantity:1

                      })
                      await loadcart()
                     }
                    return (
                      <Fragment key={orderproduct.id}>
                        <div className="product-image-container">
                          <img src={orderproduct.product.image} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            {orderproduct.product.name}
                          </div>
                          <div className="product-delivery-date">
                            Arriving on:{" "}
                            {dayjs(orderproduct.estimatedDeliveryTimeMs).format(
                              "MMMM D"
                            )}
                          </div>
                          <div className="product-quantity">
                            Quantity: {orderproduct.quantity}
                          </div>
                          <button className="buy-again-button button-primary">
                            <img
                              className="buy-again-icon"
                              src="images/icons/buy-again.png"
                            />
                            <span className="buy-again-message"
                            onClick={addToCart}>
                              Add to Cart
                            </span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <NavLink to="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </NavLink>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
    )
}