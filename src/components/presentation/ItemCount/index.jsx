import React, {useState} from 'react'
import './styles.css';

const ItemCount = ({stock, itemName, onAddToCart}) => {
    const [item, setItem] = useState({name:itemName, amount:1});

    const onSubtract = () => {
        if(item.amount > 1) setItem({name:itemName, amount:item.amount-1})
    }

    const onAdd = () => {
        if(item.amount<stock) setItem({name:itemName, amount:item.amount+1})
    }

    return (
        <div id="container">
            <h3>{itemName}</h3>
            <div id="amountDiv">
                <button onClick={onSubtract}>-</button>
                <p>{item.amount}</p>
                <button onClick={onAdd}>+</button>
            </div>
            <button id="addToCartButton" onClick={() => onAddToCart(item)}>Añadir al Carrito</button>
        </div>
    )
}

export default ItemCount