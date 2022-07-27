import React, { useContext} from 'react';
import { cart } from "../../../context/CartContext";
import {useNavigate} from "react-router-dom";
import CartList from '../../presentation/CartList';
import './styles.css';
import ModalIt from '../ModalIt';

/**
 * Componente encargado de mostrar el contenido del carrito en la ruta '/cart'. Muestra CartList si hay algo en el carrito, notificando el resultado de la orden
 * cuando se realiza la compra.
 * @returns 
 */

const Cart = () => {
  const navigate = useNavigate();
  const {cartContent, orden, clear} = useContext(cart)

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
      {Object.keys(orden).length !== 0 ?
        orden.success ?
         <ModalIt
          headerText='Se ha completado la orden'
          buttonText='Volver al inicio'
          redirectTo='/'
          auxFunc={clear}>
            <p>{`La orden se completó con la ID: ${orden.value}`}</p>
         </ModalIt>
        :
          <ModalIt
            headerText='Hubo un error con su orden'
            buttonText='Ok'>
              <p>{orden.value}</p>
          </ModalIt>
      :
        null}
    </div>
  )
}

export default Cart