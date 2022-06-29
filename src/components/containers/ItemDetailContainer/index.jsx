import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemDetail from '../../presentation/ItemDetail';

const ItemDetailContainer = () => {
    const [detalleDeProducto, setDetalleDeProducto] = useState({});

    const params = useParams()

    useEffect(() => {
      const promiseProducto = new Promise ((accept, reject) => {
        setTimeout(() => {
          const productDB = fetch('/mocks/data.json');
          //const producto = fetch(`https://fakestoreapi.com/products/${params.id}`);
          accept(productDB);
        }, 2000);
      })

    const getProducto = async () => {
        try {
          const response = await promiseProducto;
          const data = await response.json();
          const producto = data.items.filter(item => item.id === params.id);
          setDetalleDeProducto(producto[0]);
        } catch (error) {
          console.log(error);
        }
    }
    getProducto()
    }, [params])

    return (
        <div id="itemDetailContainer">
            {
            Object.keys(detalleDeProducto).length > 0 ?
            <ItemDetail producto={detalleDeProducto}/>
            :
            null
            }
        </div>
    )
}

export default ItemDetailContainer