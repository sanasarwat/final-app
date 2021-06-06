import React, { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

const getLocalWishItems = () => {
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

export const WishContext = createContext();

export default function WishProvider(props) {
  const [wishItems, setWishItems] = useState(getLocalWishItems());

  // Add Product To Cart
  const addToWish = (item) => {
    const product = { ...item };
    setWishItems([...wishItems, product]);

    toast.success("Wish Added Successfully !");
  };

  // Incremen or Decrement Quantity
  // const updateQuantity = (item, delta) => {
  //   const copyCart = [...cartItems];
  //   const index = copyCart.findIndex((itm) => itm.id === item.id);
  //   copyCart[index].cartQuantity += delta;
  //   setCartItems(copyCart);

  //   toast.info("Product Quantity Updated !");
  // };

  const removeFromWish = (item) => {
    setWishItems(
      wishItems.filter((e) => {
        if (e.id === item.id) return e.id !== item.id ? true : false;
        else return true;
      })
    );
    toast.error("Wish Removed Successfully !");
  };

  // const totalCartItems = cartItems.reduce(
  //   (sum, item) => sum + item.cartQuantity,
  //   0
  // );

  return (
    <WishContext.Provider
      value={{
        ...props,

        wishItems,
        addToWish,
        removeFromWish,
      }}
    >
      {props.children}
    </WishContext.Provider>
  );
}
