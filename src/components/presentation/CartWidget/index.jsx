import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom";
import {cart} from '../../../context/CartContext'

/**
 * Icono del carrito en la NavBar. Muestra la cantidad de productos en el carrito y redirecciona a /cart cuando lo cliqueás.
 * @returns 
 */

const CartWidget = () => {

  const navigate = useNavigate();
  const {cartContent} = useContext(cart)
  
  const handleClick = () => {
    navigate('/cart');
  }

  return (
    <div id="cartWidgetIcon" >
      {
        cartContent.length !== 0 ?
          <p style={{
            position:'absolute',
            color:'#edf5ce',
            width: '20px',
            height: '20px',
            borderStyle:'solid',
            borderColor:'#7C121B',
            borderWidth:'2px',
            borderRadius:'20px',
            backgroundColor:'#7C121B',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translate(-5px, -3px)',
            fontFamily: "'Ubuntu Mono', monospace"
          }
            }>{cartContent.reduce((acum, item) => {return (acum + item.quantity)}, 0)}</p>
        :
          null
      }
      <img onClick={handleClick} style={{width:"auto", height:"38px"}} src='assets/Carrito.svg' alt="Cart Widget Icon"/>
    </div>
  )
}

export default CartWidget