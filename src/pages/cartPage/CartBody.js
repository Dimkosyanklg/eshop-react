import React, { useState } from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader.js";
import CartContent from "./CartContent.js";
import CartFooter from "./CartFooter.js";

const CartBody = () => {
  return (
    <CartContainer>
      <CartHeader />
      <CartContent />
      <CartFooter />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  margin: 0 15% 0 15%;
  min-height: 20vw;
  height: auto;
`;

export default CartBody;
