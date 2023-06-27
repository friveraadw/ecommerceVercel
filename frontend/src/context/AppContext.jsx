import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [products] = useState([
    { id: '1', name: 'Shirt', description: 'Lorem ipsum dolor sit amet.', price: 10 },
    { id: '2', name: 'Pants', description: 'Lorem ipsum dolor sit amet.', price: 20 },
    // Add more products here
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <AppContext.Provider value={{ addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
}
