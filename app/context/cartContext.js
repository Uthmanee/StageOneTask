import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  emptyCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
  totalQuantity: 0,
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const price = cart.reduce((acc, item) => acc + item.price, 0);
    const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    setTotalPrice(price);
    setTotalQuantity(quantity);
  }, [cart]);

  const addToCart = (newItem, from = "") => {
    const existingItem = cart.find(
      (item) =>
        item.brandName.trim() + item.productDetail.trim() ===
        newItem.brandName.trim() + newItem.productDetail.trim()
    );
    if (!existingItem) {
      setCart((prevCart) => [...prevCart, newItem]);
    } else {
      if (from !== "") {
        const basePrice = existingItem.price / existingItem.quantity;
        existingItem.price =
          from === "cartIncrease"
            ? existingItem.price + basePrice
            : existingItem.price - basePrice;
        existingItem.quantity =
          from === "cartIncrease"
            ? existingItem.quantity + 1
            : existingItem.quantity - 1;
        setTotalPrice(cart.reduce((acc, item) => acc + item.price, 0));
        setTotalQuantity((prevQty) =>
          from === "cartIncrease" ? prevQty + 1 : prevQty - 1
        );
        return;
      } else {
        const updatedQuantity = existingItem.quantity + newItem.quantity;
        existingItem.quantity = updatedQuantity;
        existingItem.price = existingItem.price + newItem.price;
      }
    }
  };

  const emptyCart = (itemId) => {
    setCart((prevCart) => []);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const value = {
    cart,
    addToCart,
    emptyCart,
    removeFromCart,
    totalPrice,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
