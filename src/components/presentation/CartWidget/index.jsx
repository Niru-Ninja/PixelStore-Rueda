import React from 'react'
import {useNavigate} from "react-router-dom";

const CartWidget = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/cart');
  }

  return (
    <img id="cartWidgetIcon" onClick={handleClick} style={{width:"auto", height:"38px"}} src='assets/Carrito.svg' alt="Cart Widget Icon"/>
  )
}

export default CartWidget