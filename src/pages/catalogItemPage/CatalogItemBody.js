import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../appContext/AppContext";

const CatalogItemBody = (props) => {
  const {cart, addToCart, removeFromCart} = useContext(AppContext);
  const [item, setItem] = useState({});
  // const []
  useState(() => {
    setItem(
      props.goods.filter(
        (obj) => obj.name === props.itemName.replace(/_/g, " ")
      )[0]
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ImageContainer>
        <img src={item.imgSrc} alt="" />
      </ImageContainer>
      <DescriptionContainer>
        <NameContainer>{item.name}</NameContainer>
        <PriceContainer>{`${item.price} ₽`}</PriceContainer>
        <ToBasketButton>В КОРЗИНУ</ToBasketButton>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 50%;
  border: 1px solid black;

  img {
    width: 60%;
    margin: 5% 20% 0 20%;
  }
`;

const DescriptionContainer = styled.div`
  width: 50%;
  height: 50%;
  border: 1px solid black;
`;
const NameContainer = styled.div`
  height: 30%;
  font-size: 1.4rem;
`;
const PriceContainer = styled.div`
  height: 15%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ed1c24;
`;
const ToBasketButton = styled.div`
  border-radius: 0.5rem;
  background-color: #005aab;
  color: #ffffff;
  width: 80%;
  margin: 0 10% 0 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RemoveFromBasketButton = styled.div`
  border-radius: 0.5rem;
  background-color: #005aab;
  color: #ffffff;
  width: 80%;
  margin: 0 10% 0 10%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CatalogItemBody;
