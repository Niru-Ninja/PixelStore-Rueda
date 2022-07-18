import React, { useContext } from "react";
import { cart } from "../../../context/CartContext";
import CartItem from "../CartItem";
import "./styles.css";

const CartList = ({generarOrdenDeCompra}) => {
  const { cartContent, removeItem, clear, calcularTotal } = useContext(cart);

  return (
    <div className="productContainer">
      {cartContent.map((producto) => {
        return <CartItem key={producto.id} producto={producto} removeItem={removeItem} />;
      })}
      <p id="totalText">TOTAL: ${calcularTotal()}</p>
      <button id='buyButton' onClick={generarOrdenDeCompra}>Realizar Compra</button>
      <button className="emptyCartBtn" onClick={clear}>Vaciar Carrito</button>
    </div>
  );
};

export default CartList;
