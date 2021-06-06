import React, { useContext } from "react";
import NavBar from "../../Components/Header/AppBar";
import CartTable from "./CartTable";
import { CartContext } from "../../helpers/CartProvider";

import Footer from "../../Components/Footer/Footer";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

export default function Cart() {
  const { cartTotal, cartItems, removeFromCart, updateQuantity } =
    useContext(CartContext);

  return (
    <>
      <NavBar />
      <Breadcrums />
      <CartTable
        cartTotal={cartTotal}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <Footer />
    </>
  );
}
