import React from 'react'
import './styles.css'
import ItemCount from '../ItemCount'

const ItemDetail = ({producto}) => {

    const onAddToCart = (item) => {
        console.log(`Agregaste ${item.amount} '${item.name}' a tu carrito.`);
    };

  return (
    <div id='productDescription'>
        <h1>{producto.title}</h1>
        <img src={producto.image} alt={producto.title}></img>
        <p id='detail_description'>{producto.description}</p>
        <p id='detail_price'>${producto.price}</p>
        <ItemCount stock={17} onAddToCart={onAddToCart}/>
    </div>
  )
}

export default ItemDetail