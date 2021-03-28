import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GLOBAL_STYLE } from "../../constants/GLOBAL_STYLE.js";
import Header from "../../header/Header.js";
import Footer from "../../footer/Footer.js";
import { useParams } from "react-router";
import CatalogItemBody from "./CatalogItemBody.js";
import CatalogItemRecommended from "./CatalogItemRecommended.js";
import { AppContext } from "../../appContext/AppContext.js";

const CatalogItemPage = () => {
  const { store } = useContext(AppContext);
  const { type, item } = useParams();
  const [goods, setGoods] = useState(store[type].goodsItem);
  useEffect(() => {
    setGoods(store[type].goodsItem);
  }, [item]);

  return (
    <>
      <GLOBAL_STYLE />
      <Header />
      <Container>
        <CatalogItemBody goods={goods} itemName={item} />
        <CatalogItemRecommended goods={goods} itemName={item} />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin: 0 15% 0 15%;
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  height: 80vw;
`;

export default CatalogItemPage;
