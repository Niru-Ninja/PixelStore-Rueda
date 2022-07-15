import React, {useContext} from 'react';
import { cart } from "../../../context/CartContext";
import {useNavigate} from "react-router-dom";
import CartList from '../../presentation/CartList';
import './styles.css';

const Cart = () => {
  const navigate = useNavigate();
  const {cartContent} = useContext(cart)
  return (
    <div id="cartContainer">
      {
        cartContent.length !== 0 ?
          <CartList/>
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