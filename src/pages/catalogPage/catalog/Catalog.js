import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ToCart from "./ToCart.js";

const Catalog = (props) => {
  const { type } = useParams();
  /* ------------------------------------------------------------------- */
  let { price: filterPrice, firms: filterFirms } = props.filters;
  filterFirms = !filterFirms.length
    ? (filterFirms = Array.from(
        new Set(props.goodsItem.map((element) => element.firm))
      ))
    : filterFirms;
  /* -------------------------------------------------------------------- */
  filterPrice.from = !filterPrice.from ? 0 : filterPrice.from;
  filterPrice.to = !filterPrice.to ? Infinity : filterPrice.to;
  const renderGoodsItem = props.goodsItem.filter(({ price, firm }) => {
    return (
      filterFirms.includes(firm) &&
      price >= Number(filterPrice.from) &&
      price <= Number(filterPrice.to)
    );
  });
  /* ---------------------------------------------------------------------------- */
  return (
    <CatalogContainer>
      {renderGoodsItem.map(({ id, name, price, imgSrc, firm }) => (
        <CatalogItem key={id}>
          <CatalogItemImage>
            <img src={imgSrc} alt="" />
          </CatalogItemImage>
          <CatalogItemName>
            <Link
              to={() => {
                let url = `/catalog/${type}/` + name.replace(/\s+/g, "_");
                return url;
              }}
            >
              {name}
            </Link>
          </CatalogItemName>
          <PricePlusToCart>
            <CatalogItemPrice>{`${price} ₽`}</CatalogItemPrice>
            <ToCartContainer>
              <ToCart goodsItem={{ id, name, price, imgSrc, firm }} />
            </ToCartContainer>
          </PricePlusToCart>
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
  border-left: none;
  border-top: none;
  border-radius: 0 0 0.5rem 0;
  padding-top: 1%;

  &:hover {
    /* border: 0.1rem solid #ffffff; */
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
  height: 27%;
  margin-top: 3%;
  font-size: 0.9rem;

  a {
    text-decoration: none;
    color: #005baa;
  }
`;
const CatalogItemPrice = styled.div`
  width: 40%;
  font-size: 1rem;
  color: #ed1c24;
  font-weight: 600;
`;
const ToCartContainer = styled.div`
  width: 37%;
  margin-right: 3%;

  ${CatalogItem}:hover & > * {
    visibility: visible;
    opacity: 1;
  }
`;
const PricePlusToCart = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
`;

export default Catalog;
