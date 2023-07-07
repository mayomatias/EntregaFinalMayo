import React, { useState, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemsToCart, setItemsToCart] = useState([]);

  const logState = () => {
    console.log('Items',itemsToCart)
  }

  return (
    <CartContext.Provider value={[itemsToCart, setItemsToCart, logState]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
