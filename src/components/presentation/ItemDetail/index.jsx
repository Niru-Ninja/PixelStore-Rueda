import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import ItemCount from '../ItemCount'
import {cart} from '../../../context/CartContext'

const ItemDetail = ({producto}) => {

  const [cantidad, setCantidad] = useState(0);

  const {addItem} = useContext(cart)
  const onAddToCart = (itemAmount) => {
    setCantidad(itemAmount)
    addItem(producto, itemAmount)
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
            <ItemCount stock={producto.stock} onAddToCart={onAddToCart}/>
          :
          <div style={{width:'100%', marginTop:'10px'}}>
            <button id='backButton' onClick={() => {navigate('/')}}>Seguir comprando</button>
            <button id='finishPurchaseButton' onClick={onFinishPurchase}>Terminar mi Compra</button>
          </div>
        }
    </div>
  )
}

export default ItemDetail