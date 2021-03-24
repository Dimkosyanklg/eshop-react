import React, { useState } from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader.js";
import CartContent from "./CartContent.js";
import CartFooter from "./CartFooter.js";

const CartBody = () => {
  const [cartItems, setCartItems] = useState([]);
  const getCartItems = (value) => {
    setCartItems(value);
  };
  return (
    <CartContainer>
      <CartHeader />
      <CartContent getCartItems={getCartItems} />
      <CartFooter cartItems={cartItems} />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  margin: 0 15% 0 15%;
  min-height: 20vw;
  height: auto;
`;

export default CartBody;
