import React from "react";
import "../../css/minicart.css";

const MiniCart = ({ cartItems }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <div className="miniCartDetails">
      <h2>Mini Cart</h2>
      {cartItems.length === 0 && (
        <p>Your cart is empty</p>
      )}

      {cartItems.map((item) => (
        <div key={item.size.id} className="cartItem">
          <img src={item.image} alt={item.title} className="cartImage" />

          <div className="cartItemInfo">
            <p>
              {item.title} - {item.size.label}
            </p>
            <p>Quantity: {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && <h4>Total: ${total.toFixed(2)}</h4>}
    </div>
  );
};

export default MiniCart;
