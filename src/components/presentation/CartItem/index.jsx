import React from "react";
import "./styles.css";

const CartItem = ({ producto, removeItem }) => {
  return (
    <div className="cartProduct" key={producto.id}>
      <p className="productTitle">{producto.title}</p>
      <div className="priceDescription">
        <p>${producto.price}</p>
        <p>x</p>
        <p>{producto.quantity}</p>
        <p>=</p>
        <p>${producto.price * producto.quantity}</p>
      </div>
      <button onClick={() => removeItem(producto.id)}>X</button>
    </div>
  );
};

export default CartItem;
