import React from "react";
import "../../css/header.css";

const Header = ({ cartItems, toggleCart }) => {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="header">
      <div className="cart" onClick={toggleCart}>
        My Cart ({totalQuantity})
      </div>
    </div>
  );
};

export default Header;
