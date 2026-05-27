import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.size === size);
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.size === size
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, { ...product, size, qty: 1 }];
    });
  };

  const removeFromCart = (id, size) =>
    setCartItems(prev => prev.filter(i => !(i.id === id && i.size === size)));

  const changeQty = (id, size, delta) =>
    setCartItems(prev =>
      prev.map(i =>
        i.id === id && i.size === size
          ? { ...i, qty: Math.max(1, i.qty + delta) }
          : i
      )
    );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, changeQty }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}