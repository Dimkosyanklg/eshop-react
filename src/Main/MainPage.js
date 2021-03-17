import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import { GLOBAL_STYLE } from "../constants/GLOBAL_STYLE.js";

const MainPage = () => {
  return (
    <>
      <GLOBAL_STYLE />
      <Header />
      <Test>ТЕст</Test>
      <Footer />
    </>
  );
};

const Test = styled.div`
  border: 1px solid black;
  height: 50%;
`;

export default MainPage;
