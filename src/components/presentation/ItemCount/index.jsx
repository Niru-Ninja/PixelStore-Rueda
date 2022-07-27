import React, {useState} from 'react'
import './styles.css';

/**
 * Contador que se muestra en ItemDetail para que el usuario elija la cantidad que desea comprar de un producto.
 * @property {integer} stock Stock disponible del producto a comprar.
 * @property {function} onAddToCart Función que agrega al carrito el producto al presionar el botón 'Añadir al carrito'.
 * @returns 
 */

const ItemCount = ({stock, onAddToCart}) => {
    const [itemAmount, setItemAmount] = useState(1);

    const onAddOrSubtract = (cantidad) => {
        setItemAmount(itemAmount + cantidad)
    }

    return (
        <div id="container">
            <div id="amountDiv">
                <button onClick={() => onAddOrSubtract(-1)} disabled={itemAmount === 1 ? true : null}>-</button>
                <p>{itemAmount}</p>
                <button onClick={() => onAddOrSubtract(1)} disabled={itemAmount >= stock ? true : null}>+</button>
            </div>
            <button id="addToCartButton" onClick={() => onAddToCart(itemAmount)}>Añadir al Carrito</button>
        </div>
    )
}

export default ItemCount