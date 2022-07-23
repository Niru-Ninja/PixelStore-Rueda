import React, {createContext, useState} from 'react'
import guardarOrden from '../utils/guardarOrden';

export const cart = createContext();

const CartContext = ({children}) => {

    const [cartContent, setCartContent] = useState([]);
    const [orden, setOrden] = useState({});

    const addItem = (item, quantity) => {
      const productoEnCart = isInCart(item);
      if (productoEnCart){
        productoEnCart.quantity += quantity
        setCartContent([...cartContent])
      } else{
          setCartContent([...cartContent, {...item, quantity: quantity}]);
      }
    }

    const isInCart = (producto) => {
      return cartContent.find(elem => elem.id === producto.id)
    }

    const removeItem = (itemId) => {
      setCartContent(cartContent.filter(producto => {return producto.id !== itemId}))
    }

    const clear = () => {
      setCartContent([]);
    }

    const calcularTotal = () => {
      return cartContent.reduce((acum, item) => {return acum + item.price * item.quantity;}, 0)
    }

    const generarOrdenDeCompra = async(datos) => {
      const ordenDeCompra = {
        buyer: datos,
        items: cartContent,
        date: new Date().toLocaleString(),
        total: calcularTotal()
      };
      setOrden(await guardarOrden(cartContent, ordenDeCompra));
    }

  return (
    <cart.Provider value={{cartContent, setCartContent, addItem, removeItem, clear, calcularTotal, orden, setOrden, generarOrdenDeCompra}}>
        {children}
    </cart.Provider>
  )
}

export default CartContext