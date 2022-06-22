import React from 'react'
import './styles.css'

const Item = ({product}) => {
  return (
    <div id="itemCard">
      <h4>{product.name}</h4>
      <div style={{width:"200px", height:"200px", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img src={product.image} alt="Product"/>
      </div>
      <p id="fromGame">De: {product.game}</p>
      <p id="price">${product.price}</p>
    </div>
  )
}

export default Item