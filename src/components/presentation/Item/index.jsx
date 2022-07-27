import React from 'react'
import './styles.css'
import {useNavigate} from "react-router-dom";

/**
 * Muestra el producto en una card con su titulo, imagen, juego del que procede y su precio.
 * Se utiliza desde el componente ItemList para listar todos los productos disponibles.
 * @property {Object} product Producto que mostrará la card.
 * @returns 
 */

const Item = ({product}) => {

  const navigate = useNavigate();
  
  const handleDetail = () => {
    navigate(`/detail/${product.id}`);
  }

  return (
    <div id="itemCard" onClick={handleDetail}>
      <h4>{product.title}</h4>
      <div style={{width:"200px", height:"200px", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img src={product.image} alt="Product"/>
      </div>
      <p id="fromGame">De: {product.game}</p>
      <p id="price">${product.price}</p>
    </div>
  )
}

export default Item