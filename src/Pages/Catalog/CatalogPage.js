import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Catalog from "./Catalog.js";
import Sidebar from "./Sidebar.js";
import { GLOBAL_STYLE } from "../../globalStyle/GLOBAL_STYLE.js";
import Header from "../../header/Header.js";
import Footer from "../../footer/Footer.js";

const CatalogPage = () => {
  const qwe = useParams();
  console.log(qwe);
  return (
    <>
      <GLOBAL_STYLE />
      <Header />
      <PageContainer>
        <Catalog />
        <Sidebar />
      </PageContainer>
      <Footer />
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
`;

export default CatalogPage;
