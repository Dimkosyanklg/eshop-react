import React from "react";
import styled from "styled-components";

const Catalog = (props) => {
  let { price: filterPrice, firms: filterFirms } = props.filters;
  filterFirms = !filterFirms.length
    ? (filterFirms = Array.from(
        new Set(props.goodsItem.item.map((element) => element.firm))
      ))
    : filterFirms;
  filterPrice.from = !filterPrice.from ? 0 : filterPrice.from;
  filterPrice.to = !filterPrice.to ? Infinity : filterPrice.to;
  const renderGoodsItem = props.goodsItem.item.filter(({ price, firm }) => {
    return (
      filterFirms.includes(firm) &&
      price >= Number(filterPrice.from) &&
      price <= Number(filterPrice.to)
    );
  });

  return (
    <CatalogContainer onClick={() => console.log(props.filters)}>
      {renderGoodsItem.map(({ id, name, price, imgSrc }) => (
        <CatalogItem key={id}>
          <CatalogItemImage>
            <img src={imgSrc} alt="" />
          </CatalogItemImage>
          <CatalogItemName>{name}</CatalogItemName>
          <CatalogItemPrice>{`${price} ₽`}</CatalogItemPrice>
        </CatalogItem>
      ))}
    </CatalogContainer>
  );
};

const CatalogContainer = styled.div`
  height: auto;
  min-height: 30vw;
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const CatalogItem = styled.div`
  height: 15vw;
  width: 20%;
  margin: 2% 0 0 4%;
  border: 0.1rem solid #d4d4d4;
  border-radius: 0.3rem;
  padding-top: 1%;

  &:hover {
    border: 0.1rem solid #ffffff;
    box-shadow: 0 0 0.5rem 0.1rem rgb(0, 0, 0, 0.2);
  }
`;
const CatalogItemImage = styled.div`
  height: 60%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const CatalogItemName = styled.div`
  height: 30%;
  font-size: 1rem;
`;
const CatalogItemPrice = styled.div`
  height: 10%;
  font-size: 1rem;
`;

export default Catalog;
