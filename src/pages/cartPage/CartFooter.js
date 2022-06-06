import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../../constants/BASE_URL";

const CartFooter = (props) => {
  const getPrices = (item) => {
    if (!item.length) {
      return { pickup: 0, delivery: 0, sum: 0 };
    } else {
      let temp = {};
      let tempPickup = item.filter((obj) => obj.pickup);
      if (tempPickup.length) {
        temp.pickup = tempPickup.reduce((sum, obj) => sum + obj.sum, 0);
      } else {
        temp.pickup = 0;
      }
      let tempDelivery = item.filter((obj) => obj.delivery);
      if (tempDelivery.length) {
        temp.delivery = tempDelivery.reduce((sum, obj) => sum + obj.sum, 0);
      } else {
        temp.delivery = 0;
      }
      temp.sum = temp.pickup + temp.delivery;
      return temp;
    }
  };
  const [prices, setPrices] = useState({ pickup: 0, delivery: 0, sum: 0 });
  useEffect(() => {
    setPrices(getPrices(props.cartItems));
  }, [props.cartItems]);
  if (props.cartItems.length) {
    return (
      <CartFooterContainer>
        <BannersContainer>
          <Banner>
            <img src={baseUrl + "cartIcons/spasiboIcon.png"} alt="" />
          </Banner>
          <Banner>
            <img src={baseUrl + "cartIcons/tinkoffIcon.png"} alt="" />
          </Banner>
        </BannersContainer>
        <PromoContainer>
          <h3>Промокод:</h3>
          <Promo>
            <PromoInput type="text" />
            <PromoButton>Применить</PromoButton>
          </Promo>
        </PromoContainer>
        <OrderContainer>
          <OrderBlock>
            <OrderTitle>Сумма заказов:</OrderTitle>
          </OrderBlock>
          <OrderBlock>
            <OrderTitle>на самовывоз</OrderTitle>
            <OrderValue>{`${prices.pickup} ₽`}</OrderValue>
          </OrderBlock>
          <OrderBlock>
            <OrderTitle>с доставкой</OrderTitle>
            <OrderValue>{`${prices.delivery} ₽`}</OrderValue>
          </OrderBlock>
          <OrderBlock>
            <OrderTitle>ИТОГО</OrderTitle>
            <OrderValue>{`${prices.sum} ₽`}</OrderValue>
          </OrderBlock>
          <OrderButton>Продолжить</OrderButton>
        </OrderContainer>
      </CartFooterContainer>
    );
  } else return false;
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

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
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
const OrderBlock = styled.div`
  width: 100%;
  display: flex;
  height: 15%;
  font-weight: 600;
`;
const OrderTitle = styled.div`
  width: 60%;
  text-align: right;
`;
const OrderValue = styled.div`
  width: 30%;
  text-align: right;
`;
const OrderButton = styled.div`
  width: 100%;
  height: 15%;
  color: #ffffff;
  border-radius: 0.5rem;
  background: linear-gradient(to bottom, #ec1c24 0, #b0151b 100%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export default CartFooter;
