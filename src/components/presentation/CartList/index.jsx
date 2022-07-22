import React, { useState, useContext } from "react";
import { cart } from "../../../context/CartContext";
import BuyerForm from "../BuyerForm";
import CartItem from "../CartItem";
import "./styles.css";

const CartList = () => {
  const { cartContent, removeItem, clear, calcularTotal } = useContext(cart);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="productContainer">
      {cartContent.map((producto) => {
        return <CartItem key={producto.id} producto={producto} removeItem={removeItem} />;
      })}
      <p id="totalText">TOTAL: ${calcularTotal()}</p>
      <button id='buyButton' onClick={() => setMostrarFormulario(!mostrarFormulario)}>Realizar Compra</button>
      <button className="emptyCartBtn" onClick={clear}>Vaciar Carrito</button>
      {mostrarFormulario && <BuyerForm parentStateFunc={setMostrarFormulario}/>}
    </div>
  );
};

export default CartList;
