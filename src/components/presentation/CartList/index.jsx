import React, { useState, useContext } from "react";
import { cart } from "../../../context/CartContext";
import BuyerForm from "../BuyerForm";
import CartItem from "../CartItem";
import "./styles.css";

/**
 * Muestra los detalles de la compra, obteniendo el contenido del carrito del CartContext muestra cada producto con un componente CartItem
 * y realiza la compra a travez de un BuyerForm.
 * @returns 
 */

const CartList = () => {
  const { cartContent, removeItem, clear, calcularTotal } = useContext(cart);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <>
    {mostrarFormulario && <BuyerForm parentStateFunc={setMostrarFormulario}/>}
    <div className="productContainer">
      {cartContent.map((producto) => {
        return <CartItem key={producto.id} producto={producto} removeItem={removeItem} />;
      })}
      <p id="totalText">TOTAL: ${calcularTotal()}</p>
      <button id='buyButton' onClick={() => setMostrarFormulario(!mostrarFormulario)}>Realizar Compra</button>
      <button className="emptyCartBtn" onClick={clear}>Vaciar Carrito</button>
    </div>
    </>
  );
};

export default CartList;
