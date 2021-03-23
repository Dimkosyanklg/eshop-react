import React, { useState } from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader.js";
import CartContent from "./CartContent.js";
import CartFooter from "./CartFooter.js";

const CartBody = () => {
  const [sums, setSums] = useState({ goods: {} });
  const [radio, setRadio] = useState([]);
  const getSums = (value) => {
    setSums(value);
  };
  const getRadio = (value) => {
    setRadio(value);
  }
  return (
    <CartContainer>
      <CartHeader />
      <CartContent getSums={getSums} getRadio={getRadio} />
      <CartFooter sums={sums} radio={radio} />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  margin: 0 15% 0 15%;
  min-height: 20vw;
  height: auto;
`;

export default CartBody;
