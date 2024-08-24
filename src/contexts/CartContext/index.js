import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddItemCart = (id, name, price) => {
    const itemObject = {
      id,
      name,
      price
    };
    setCart([...cart, itemObject]);
  };

   const handleRemoveItemFromCart = (clickedItemIndex) => {
    const filteredCart = cart.filter((_, index) => index !== clickedItemIndex);
    setCart(filteredCart);
  };
  const clearCart = () => {
    setCart([]);
  };



  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart, handleAddItemCart, handleRemoveItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
