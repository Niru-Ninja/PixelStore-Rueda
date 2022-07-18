import React, {useContext} from 'react';
import { cart } from "../../../context/CartContext";
import {useNavigate} from "react-router-dom";
import CartList from '../../presentation/CartList';
import './styles.css';
import guardarOrden from '../../../utils/guardarOrden';

const Cart = () => {
  const navigate = useNavigate();
  const {cartContent, calcularTotal} = useContext(cart)

  const generarOrdenDeCompra = () => {
    const ordenDeCompra = {
      buyer: {name: 'Ramiro Ramirez', phone: '1587923468', email: 'ramiro@ramirez.com'},
      items: cartContent,
      date: new Date().toLocaleString(),
      total: calcularTotal()
    }
    console.log(ordenDeCompra);
    guardarOrden(cartContent, ordenDeCompra);
  }

  return (
    <div id="cartContainer">
      {
        cartContent.length !== 0 ?
          <CartList generarOrdenDeCompra={generarOrdenDeCompra}/>
        :
        <>
          <div id='emptyCartText'>¡Carrito Vacio!</div>
          <button id='emptyCartButton' onClick={()=>{navigate('/');}}>Volver</button>
        </>
      }
    </div>
  )
}

export default Cart