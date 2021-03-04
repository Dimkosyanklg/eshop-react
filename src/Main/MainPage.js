import React, { useContext } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import { GLOBAL_STYLE } from "../globalStyle/GLOBAL_STYLE.js";
import { AppContext } from "../appContext/AppContext.js";

const MainPage = () => {
  const store = useContext(AppContext);
  console.log(store);
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
