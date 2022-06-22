import React, {useState, useEffect} from 'react';
//import ItemCount from '../../presentation/ItemCount'
import ItemList from '../../presentation/ItemList';
import './styles.css';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState({items:[]});

  /*const onAddToCart = (item) => {
    console.log(`Agregaste ${item.amount} '${item.name}' a tu carrito.`);
  };*/

  const promiseProductos = new Promise ((accept, reject) => {
    setTimeout(() => {
      const productDB = fetch('/mocks/data.json');
      accept(productDB);
    }, 2000);
  })

  const getProductos = async () => {
    try {
      const response = await promiseProductos;
      const data = await response.json();
      console.log(data);
      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <div id="itemListContainer">
      <h2>{greeting}</h2>
      {
        productos.items !== [] ? 
          <ItemList products={productos}/>
        :
        null
      }
    </div>
  )
}
//<ItemCount stock={17} itemName={"Healing Potion"} onAddToCart={onAddToCart}/>

export default ItemListContainer