import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuantityButton from "./QuantityButton.js";

const PriceQuantitySum = (props) => {
  const [quantity, setQuantity] = useState({ value: 1 });
  const [sum, setSum] = useState(0);
  // Получает количество товара для Sum
  const getQuantity = (value) => {
    setQuantity({ value: value });
  };
  useEffect(() => {
    setSum(props.item.price * quantity.value);
  }, [quantity.value]);
  useEffect(() => {
    props.addToSum(props.item.name, sum);
  }, [sum]);

  return (
    <>
      <Price>{`${props.item.price} ₽`}</Price>
      <Quantity onClick={() => {}}>
        <QuantityButton getQuantity={getQuantity}></QuantityButton>
      </Quantity>
      <Sum>{`${sum} ₽`}</Sum>
    </>
  );
};

const Price = styled.div`
  height: 85%;
  width: 15%;
  text-align: center;
  font-size: 1.4em;
`;

const Quantity = styled.div`
  height: 85%;
  width: 15%;
  text-align: center;
`;

const Sum = styled.div`
  height: 85%;
  width: 20%;
  text-align: center;
  font-size: 1.4em;
`;

export default PriceQuantitySum;
