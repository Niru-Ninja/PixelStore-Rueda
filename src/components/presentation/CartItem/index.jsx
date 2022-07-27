import React from "react";
import "./styles.css";

/**
 * Muestra los detalles del producto en el carrito (CartList).
 * @property {object} producto El producto del cual queremos mostrar los detalles. 
 * @property {function} removeItem Función que quita el producto del array de productos del carrito.
 * @returns 
 */

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
