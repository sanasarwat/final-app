import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem("nexusberryCart");
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cartItems, setCartItems] = useState(getLocalCartItems());
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const Total = cartItems.reduce(
      (sum, item) => sum + item.price * item.cartQuantity,
      0
    );
    setCartTotal(Total);
    localStorage.setItem("nexusberryCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add Product To Cart
  const addToCart = (item, quantity = 1) => {
    const index = cartItems.findIndex((itm) => itm.id === item.id);
    if (index === -1) {
      const product = { ...item, cartQuantity: quantity };
      setCartItems([...cartItems, product]);
    } else {
      const copyCart = [...cartItems];
      copyCart[index].cartQuantity += quantity;
      setCartItems(copyCart);
    }

    toast.success("Product Added Successfully !");
  };

  // Incremen or Decrement Quantity
  const updateQuantity = (item, delta) => {
    const copyCart = [...cartItems];
    const index = copyCart.findIndex((itm) => itm.id === item.id);
    copyCart[index].cartQuantity += delta;
    setCartItems(copyCart);

    toast.info("Product Quantity Updated !");
  };

  const removeFromCart = (item) => {
    setCartItems(
      cartItems.filter((e) => {
        if (e.id === item.id) return e.id !== item.id ? true : false;
        else return true;
      })
    );
    toast.error("Product Removed Successfully !");
  };

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.cartQuantity,
    0
  );

  const unitsInCart = (item) =>
    cartItems.reduce(
      (sum, e) => (e.id === item.id ? sum + e.cartQuantity : sum),
      0
    );

  return (
    <CartContext.Provider
      value={{
        ...props,
        cartTotal,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        unitsInCart,
        totalCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
