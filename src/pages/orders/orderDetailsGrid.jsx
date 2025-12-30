import { Fragment } from "react";
import { NavLink } from "react-router";
import dayjs from "dayjs";
export function OrderDetailsGrid({order}){
    return(
     <div className="order-details-grid">
                  {order.products.map((orderproduct) => {
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
                            <span className="buy-again-message">
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