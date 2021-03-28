import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../appContext/AppContext";
import { findIndex } from "lodash";
import { CATALOG_ITEM_INFO } from "../../constants/CATALOG_ITEM_INFO.js";

const CatalogItemBody = (props) => {
  const { cart, addToCart, removeFromCart } = useContext(AppContext);
  const [item, setItem] = useState({});
  useState(() => {
    setItem(
      props.goods.filter(
        (obj) => obj.name === props.itemName.replace(/_/g, " ")
      )[0]
    );
    window.scrollTo(0, 0);
  }, []);

  const [button, setButton] = useState({
    status: "outside",
    label: "В КОРЗИНУ",
  });
  useEffect(() => {
    setButton(() =>
      findIndex(cart, item) !== -1
        ? { status: "inside", label: "УБРАТЬ ИЗ КОРЗИНЫ" }
        : { status: "outside", label: "В КОРЗИНУ" }
    );
  }, [cart]);

  const [info, setInfo] = useState(
    CATALOG_ITEM_INFO.reduce((obj, item) => {
      obj[item] = { active: false };
      return obj;
    }, {})
  );
  useEffect(() => {
    setInfo((prevState) => {
      let newState = {};
      for (let key in prevState) {
        if (key === CATALOG_ITEM_INFO[0]) {
          newState[key] = { active: true };
        } else {
          newState[key] = { active: false };
        }
      }
      return newState;
    });
  }, []);

  return (
    <Container>
      <ContainerItem>
        <ImageContainer>
          <ImageBlock>
            <img src={item.imgSrc} alt="" />
          </ImageBlock>
        </ImageContainer>
        <DescriptionContainer>
          <NameContainer>{item.name}</NameContainer>
          <PriceContainer>{`${item.price} ₽`}</PriceContainer>
          {button.status === "outside" ? (
            <ToCartButton onClick={() => addToCart(item)}>
              {button.label}
            </ToCartButton>
          ) : (
            <RemoveFromCartButton onClick={() => removeFromCart(item)}>
              {button.label}
            </RemoveFromCartButton>
          )}
        </DescriptionContainer>
      </ContainerItem>
      <InfoContainer>
        {CATALOG_ITEM_INFO.map((item, index) =>
          info[item].active ? (
            <InfoItemActive>
              <InfoItemLabel>{item}</InfoItemLabel>
            </InfoItemActive>
          ) : (
            <InfoItem
              onClick={() => {
                setInfo((prevState) => {
                  let newState = {};
                  for (let key in prevState) {
                    if (key !== item) {
                      newState[key] = { active: false };
                    } else {
                      newState[key] = { active: true };
                    }
                  }
                  return newState;
                });
              }}
            >
              <InfoItemLabel>{item}</InfoItemLabel>
            </InfoItem>
          )
        )}
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 75%;
  height: 45%;
`;

const ContainerItem = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const ImageBlock = styled.div`
  margin: 0 10% 0 10%;
  width: 80%;
  height: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DescriptionContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const NameContainer = styled.div`
  height: 30%;
  font-size: 1.4rem;
`;
const PriceContainer = styled.div`
  height: 20%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ed1c24;
`;
const ToCartButton = styled.div`
  border: 0.2rem solid #1d488c;
  border-radius: 0.5rem;
  background-color: #005aab;
  color: #ffffff;
  width: 80%;
  margin: 0 10% 0 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  -webkit-user-select: none;
  user-select: none;
`;
const RemoveFromCartButton = styled.div`
  border: 0.2rem solid #bfbfbf;
  border-radius: 0.5rem;
  background-color: #ebebeb;
  color: #ed1c24;
  width: 80%;
  margin: 0 10% 0 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  -webkit-user-select: none;
  user-select: none;
`;

const InfoContainer = styled.div`
  width: 90%;
  height: 10%;
  margin: 1% 5%;
  display: flex;
  justify-content: space-between;
`;
const InfoItem = styled.div`
  width: auto;
  border: 0.1rem solid #005baa;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #005baa;
  cursor: pointer;
`;
const InfoItemActive = styled.div`
  width: auto;
  border: 0.1rem solid #ffffff;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #005baa;
  color: #ffffff;
`;
const InfoItemLabel = styled.div`
  margin: 0 1rem 0 1rem;
  -webkit-user-select: none;
  user-select: none;
`;

export default CatalogItemBody;
