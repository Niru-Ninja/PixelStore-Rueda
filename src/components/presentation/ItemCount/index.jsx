import React, {useState} from 'react'
import './styles.css';

const ItemCount = ({stock, itemName, onAddToCart}) => {
    const [item, setItem] = useState({name:itemName, amount:1});

    const onAddOrSubtract = (cantidad) => {
        setItem({name: item.title, amount: item.amount + cantidad})
    }

    return (
        <div id="container">
            <div id="amountDiv">
                <button onClick={() => onAddOrSubtract(-1)} disabled={item.amount === 1 ? true : null}>-</button>
                <p>{item.amount}</p>
                <button onClick={() => onAddOrSubtract(1)} disabled={item.amount === stock ? true : null}>+</button>
            </div>
            <button id="addToCartButton" onClick={() => onAddToCart(item)}>Añadir al Carrito</button>
        </div>
    )
}

export default ItemCount