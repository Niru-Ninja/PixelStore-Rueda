import React, {useState, useEffect} from 'react';
import './styles.css';
import ItemDetail from '../../presentation/ItemDetail'

const ItemDetailContainer = () => {
    const id = 3;
    const [detalleDeProducto, setDetalleDeProducto] = useState({});
    
    const promiseProducto = new Promise ((accept, reject) => {
        setTimeout(() => {
          const producto = fetch(`https://fakestoreapi.com/products/${id}`);
          accept(producto);
        }, 2000);
    })

    const getProducto = async () => {
        try {
          const response = await promiseProducto;
          const data = await response.json();
          setDetalleDeProducto(data);
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        getProducto()
    }, [])

    return (
        <div>
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