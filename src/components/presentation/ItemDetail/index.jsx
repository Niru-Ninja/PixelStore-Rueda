import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import ItemCount from '../ItemCount'

const ItemDetail = ({producto}) => {

  const [cantidad, setCantidad] = useState(0);

  const onAddToCart = (item) => {
    setCantidad(item.amount)
    console.log(`Agregaste ${item.amount} '${item.name}' a tu carrito.`);
  };

  const navigate = useNavigate();
  const onFinishPurchase = () => {
    navigate('/cart');
  }

  return (
    <div id='productDescription'>
        <h1>{producto.title}</h1>
        <img src={producto.image} alt={producto.title}></img>
        <p id='detail_description'>{producto.description}</p>
        <p id='detail_price'>${producto.price}</p>
        {
          cantidad === 0 ?
            <ItemCount stock={17} onAddToCart={onAddToCart}/>
          :
            <button id='finishPurchaseButton' onClick={onFinishPurchase}>Terminar mi Compra</button>
        }
    </div>
  )
}

export default ItemDetail