import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
  totalQuantity: 0,
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const price = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    setTotalPrice(price);
    setTotalQuantity(quantity);
  }, [cart]);

  const addToCart = (newItem) => {
    const existingItem = cart.find(
      (item) =>
        item.brandName.trim() + item.productDetail.trim() ===
        newItem.brandName.trim() + newItem.productDetail.trim()
    );
    if (!existingItem) {
      setCart((prevCart) => [...prevCart, newItem]);
    } else {
      const updatedQuantity = existingItem.quantity + newItem.quantity;
      existingItem.quantity = updatedQuantity;
      existingItem.price = existingItem.price + newItem.price;
      setTotalPrice(cart.reduce((acc, item) => acc + item.price, 0));
      setTotalQuantity((prevQty) => prevQty + newItem.quantity);
    }
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    totalPrice,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
