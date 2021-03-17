import React from "react";
import Header from "../../header/Header.js";
import Footer from "../../footer/Footer.js";
import CartBody from "./CartBody.js";
import { GLOBAL_STYLE } from "../../constants/GLOBAL_STYLE.js";

const CartPage = () => {
  return (
    <>
      <GLOBAL_STYLE />
      <Header />
      <CartBody />
      <Footer />
    </>
  );
};

export default CartPage;
