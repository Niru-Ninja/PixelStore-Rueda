import React, { useContext } from 'react';
import {cart} from '../../../context/CartContext'
import './styles.css';

const Cart = () => {

  const {cartContent, removeItem, clear} = useContext(cart)

  return (
    <div id="cartContainer">
      {
        cartContent.length !== 0 ?
          <div className='productContainer'>
            {cartContent.map(producto => {
              return(
                  <div className='cartProduct' key={producto.id}>
                    <p className='productTitle'>{producto.title}</p>
                    <div className='priceDescription'>
                      <p>${producto.price}</p>
                      <p>x</p>
                      <p>{producto.quantity}</p>
                      <p>=</p>
                      <p>${producto.price * producto.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(producto.id)}>X</button>
                  </div>
              )
            })}
            <p id='totalText'>TOTAL: ${cartContent.map(prod => {return prod.price*prod.quantity}).reduce((prev, cur) => prev+cur, 0)}</p>
            <button className='emptyCartBtn' onClick={clear}>Vaciar Carrito</button>
          </div>
        :
        <div id='emptyCartText'>¡Carrito Vacio!</div>
      }
    </div>
  )
}

export default Cart