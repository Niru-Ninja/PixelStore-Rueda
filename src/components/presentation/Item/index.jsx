import React from 'react'
import './styles.css'
import {useNavigate} from "react-router-dom";

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