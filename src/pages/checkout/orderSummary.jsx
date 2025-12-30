import { DeliveryOptions } from "./deliveryOptions";
import { CartItemDetails } from "./cartItemDetails";
import { DeliveryDate } from "./deliveryDate";
export function OrderSummary({ deliveryOptions, cart, loadcart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} />

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadcart={loadcart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
