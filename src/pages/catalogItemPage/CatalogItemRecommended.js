import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const CatalogItemRecommended = (props) => {
  const { type } = useParams();

  const getRandom = (min, max, n) => {
    let set = new Set();
    while (set.size < n) {
      set.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(set);
  };

  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    setRecommended(() => {
      let recGoods = props.goods.filter(
        (obj) => obj.name !== props.itemName.replace(/_/g, " ")
      );
      let randomIndex = getRandom(0, recGoods.length - 1, 5);
      let recommended = randomIndex.map((el) => recGoods[el]);
      return recommended;
    });
  }, []);

  return (
    <Container>
      <Header>Также рекомендуем</Header>
      {recommended.map(({ imgSrc, name, price, id }) => (
        <ItemContainer key={id}>
          <ItemImage>
            <img src={imgSrc} alt="" />
          </ItemImage>
          <ItemName>
            <Link
              to={() => {
                let url = `/catalog/${type}/` + name.replace(/\s+/g, "_");
                return url;
              }}
            >
              {name}
            </Link>
          </ItemName>
          <ItemPrice>{`${price} ₽`}</ItemPrice>
        </ItemContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
  height: 100%;
`;

const Header = styled.div`
  font-size: 1.2rem;
  margin-bottom: 5%;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 20%;
  border: 0.1rem solid #f0f0f0;
  border-radius: 0.5rem;
  box-sizing: border-box;

  & > * {
    margin-top: 2%;
  }
`;
const ItemImage = styled.div`
  width: 100%;
  height: 50%;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const ItemName = styled.div`
  width: 100%;
  height: 30%;

  a {
    text-decoration: none;
    color: #005baa;
  }
`;
const ItemPrice = styled.div`
  width: 100%;
  height: 20%;
  font-size: 1rem;
  color: #ed1c24;
  font-weight: 600;
`;

export default CatalogItemRecommended;
