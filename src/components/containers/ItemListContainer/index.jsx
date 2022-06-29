import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../../presentation/ItemList';
import './styles.css';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState({items:[]});
  const params = useParams();
  const category = params.id;

  useEffect(() => {
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
        if(category){
          const filtrado = data.items.filter(item => item.category === category);
          setProductos({items: filtrado});
        }
        else{
          setProductos(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProductos()
  }, [category])

  return (
    <div id="itemListContainer">
      <h2 style={{textAlign: "center", width: "100%", marginBottom: "20px"}}>{greeting}</h2>
      {
        productos.items.length > 0 ? 
          <ItemList products={productos}/>
        :
        null
      }
    </div>
  )
}

export default ItemListContainer