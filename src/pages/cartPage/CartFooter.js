import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CartFooter = (props) => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    let prices = 0;
    for (let price of Object.values(props.prices)) {
      prices += price;
    }
    setSum(prices);
  }, [props.prices]);
  return (
    <CartFooterContainer
      onClick={() => {
        console.log(props.prices);
      }}
    >
      <BannersContainer>
        <Banner>Тут какой-то баннер</Banner>
        <Banner>Тут какой-то баннер</Banner>
      </BannersContainer>
      <PromoContainer>
        <h3>Промокод:</h3>
        <Promo>
          <PromoInput type="text" />
          <PromoButton>Применить</PromoButton>
        </Promo>
      </PromoContainer>
      <OrderContainer>{sum}</OrderContainer>
    </CartFooterContainer>
  );
};

const CartFooterContainer = styled.div`
  display: flex;
  height: 15vw;
  margin-top: 5%;
`;

const BannersContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Banner = styled.div`
  margin: 0 5% 0 5%;
  height: 45%;
  border: 1px solid black;
`;

const PromoContainer = styled.div`
  width: 40%;
`;
const Promo = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 15%;
`;
const PromoInput = styled.input`
  width: 40%;
  outline: none;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:focus {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  }
`;
const PromoButton = styled.button`
  margin-left: 10%;
  width: 20%;
  outline: none;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  background-color: #005ca7;
  color: #ffffff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.2);
  }
`;

const OrderContainer = styled.div`
  width: 30%;
`;

export default CartFooter;
