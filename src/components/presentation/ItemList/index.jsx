import React from 'react'
import Item from '../Item'
import './styles.css'

/**
 * Lista los productos del array que le pasamos por products.
 * @property {array} products Array de productos del cual se mostrará una card Item por cada producto. 
 * @returns 
 */

const ItemList = ({products}) => {
  return (
    <div id="itemList">
      {products.map(producto => {return <Item product={producto} key={producto.id}/>})}
    </div>
  )
}

export default ItemList