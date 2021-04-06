import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ToCart from "../catalogPage/catalog/ToCart.js";
import { AppContext } from "../../appContext/AppContext";

const SearchBody = (props) => {
  const { searchValue } = props;
  const { store } = useContext(AppContext);

  const findItems = (store, searchValue) => {
    let searchArray = [];
    for (let key in store) {
      store[key].goodsItem.forEach((obj) => {
        let temp = Object.assign({ type: key }, obj);
        if (temp.name.toLowerCase().indexOf(searchValue) > -1) {
          searchArray.push(temp);
        }
      });
    }
    return searchArray;
  };

  const searchGoods = findItems(store, searchValue);

  if (!searchGoods.length) {
    return <NoMatch>По вашему запросу не найдено ни одного товара</NoMatch>;
  }
  return (
    <SearchContainer>
      {searchGoods.map(({ id, name, price, imgSrc, firm, type }) => (
        <SearchItem key={name}>
          <SearchItemImage>
            <img src={imgSrc} alt="" />
          </SearchItemImage>
          <SearchItemName>
            <Link
              to={() => {
                let url = `/catalog/${type}/` + name.replace(/\s+/g, "_");
                return url;
              }}
            >
              {name}
            </Link>
          </SearchItemName>
          <PricePlusToCart>
            <SearchItemPrice>{`${price} ₽`}</SearchItemPrice>
            <ToCartContainer>
              <ToCart goodsItem={{ id, name, price, imgSrc, firm }} />
            </ToCartContainer>
          </PricePlusToCart>
        </SearchItem>
      ))}
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  height: auto;
  min-height: 30vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SearchItem = styled.div`
  height: 15vw;
  width: 17%;
  margin: 2% 0 0 2%;
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
const SearchItemImage = styled.div`
  height: 60%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const SearchItemName = styled.div`
  height: 27%;
  margin-top: 3%;
  font-size: 0.9rem;

  a {
    text-decoration: none;
    color: #005baa;
  }
`;
const SearchItemPrice = styled.div`
  width: 40%;
  font-size: 1rem;
  color: #ed1c24;
  font-weight: 600;
`;
const ToCartContainer = styled.div`
  width: 37%;
  margin-right: 3%;

  ${SearchItem}:hover & > * {
    visibility: visible;
    opacity: 1;
  }
`;
const PricePlusToCart = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
`;

const NoMatch = styled.div`
  font-size: 1.3rem;
  margin-top: 2%;
`;

export default SearchBody;
