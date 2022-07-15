import React, { useContext } from "react";
import { cart } from "../../../context/CartContext";
import CartItem from "../CartItem";
import "./styles.css";

const CartList = () => {
  const { cartContent, removeItem, clear } = useContext(cart);

  return (
    <div className="productContainer">
      {cartContent.map((producto) => {
        return <CartItem producto={producto} removeItem={removeItem} />;
      })}
      <p id="totalText">
        TOTAL: $
        {cartContent.reduce((acum, item) => {
          return acum + item.price * item.quantity;
        }, 0)}
      </p>
      <button className="emptyCartBtn" onClick={clear}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default CartList;
