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

  const updateCartItemPrice = (index, newPrice) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].price = newPrice;
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, handleAddItemCart, handleRemoveItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
