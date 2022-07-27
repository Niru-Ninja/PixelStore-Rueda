import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import ItemCount from '../ItemCount'
import {cart} from '../../../context/CartContext'
import ModalIt from '../../containers/ModalIt'

/**
 * Muestra los detalles del producto cuando se presiona el componente Item.
 * @param {Object} producto Producto del que se mostrarán los detalles.
 * @returns 
 */

const ItemDetail = ({producto}) => {

  const [cantidad, setCantidad] = useState(0);
  const [modalError, setModalError] = useState(false);

  const {addItem} = useContext(cart)
  const onAddToCart = (itemAmount) => {
    if(itemAmount > producto.stock){
      setModalError(true);
    }
    else{
      setCantidad(itemAmount)
      addItem(producto, itemAmount)
    }
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
        {modalError ? <ModalIt 
          headerText='Hubo un error'
          buttonText='Ok'
          parentStateFunc={setModalError}>
          <p>No hay stock del producto.</p>
        </ModalIt>
        :
        null}
    </div>
  )
}

export default ItemDetail