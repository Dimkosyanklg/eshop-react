import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GLOBAL_STYLE } from "../../constants/GLOBAL_STYLE.js";
import Header from "../../header/Header.js";
import Footer from "../../footer/Footer.js";
import { useLocation, useParams } from "react-router";
import CatalogItemBody from "./CatalogItemBody.js";
import CatalogItemRecommended from "./CatalogItemRecommended.js";
import { AppContext } from "../../appContext/AppContext.js";

const CatalogItemPage = () => {
  const { store } = useContext(AppContext);
  const { type, item } = useParams();
  const LOCATION = useLocation();

  const [goodsItem, setGoodsItem] = useState(
    store[type].goodsItem.filter(
      (obj) => obj.name === item.replace(/_/g, " ")
    )[0]
  );
  useEffect(() => {
    setGoodsItem(
      store[type].goodsItem.filter(
        (obj) => obj.name === item.replace(/_/g, " ")
      )[0]
    );
    window.scrollTo(0, 0);
  }, [LOCATION.pathname]);

  return (
    <>
      <GLOBAL_STYLE />
      <Header />
      <Container>
        <CatalogItemBody goodsItem={goodsItem} />
        <CatalogItemRecommended
          goodsItem={goodsItem}
          goods={store[type].goodsItem}
        />
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
