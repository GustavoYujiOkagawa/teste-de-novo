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

  return (
    <CartContext.Provider value={{ cart, handleAddItemCart, handleRemoveItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
