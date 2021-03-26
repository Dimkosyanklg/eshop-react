import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Catalog from "./Catalog.js";
import Sidebar from "../sidebar/Sidebar.js";
import { GLOBAL_STYLE } from "../../../constants/GLOBAL_STYLE.js";
import Header from "../../../header/Header.js";
import Footer from "../../../footer/Footer.js";
import { AppContext } from "../../../appContext/AppContext.js";

const CatalogPage = () => {
  const { type } = useParams();
  const { store } = useContext(AppContext);
  const [filters, setFilters] = useState({
    firms: [],
    price: { from: "", to: "" },
  });
  const [goodsItem, setGoodsItem] = useState(store[type].goodsItem);

  useEffect(() => {
    setFilters({
      firms: [],
      price: { from: "", to: "" },
    });
    setGoodsItem(store[type].goodsItem);
  }, [type]);

  const getFilters = (value) => {
    setFilters(value);
  };

  return (
    <>
      <GLOBAL_STYLE />
      <Header />
      <PageContainer>
        <Catalog goodsItem={goodsItem} filters={filters} />
        <Sidebar goodsItem={goodsItem} getFilters={getFilters} />
      </PageContainer>
      <Footer />
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15% 0 15%;
`;

export default CatalogPage;
