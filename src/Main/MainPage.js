import React, { useContext } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import { GLOBAL_STYLE } from "../Global_Style/GLOBAL_STYLE.js";
import { AppContext } from "../App_Context/AppContext.js";

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
