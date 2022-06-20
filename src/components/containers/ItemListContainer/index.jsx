import React from 'react';
import ItemCount from '../../presentation/ItemCount';
import './styles.css';

const ItemListContainer = ({greeting}) => {

  const onAddToCart = (item) => {
    console.log(`Agregaste ${item.amount} '${item.name}' a tu carrito.`);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemCount stock={17} itemName={"Healing Potion"} onAddToCart={onAddToCart}/>
    </div>
  )
}

export default ItemListContainer