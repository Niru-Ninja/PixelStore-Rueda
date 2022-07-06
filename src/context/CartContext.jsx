import React, {createContext, useState} from 'react'

export const cart = createContext();

const CartContext = ({children}) => {

    const [cartContent, setCartContent] = useState([]);

    const addItem = (item, quantity) => {
      console.log(item, quantity);
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

  return (
    <cart.Provider value={{cartContent, setCartContent, addItem, removeItem, clear}}>
        {children}
    </cart.Provider>
  )
}

export default CartContext