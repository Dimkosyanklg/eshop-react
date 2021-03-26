import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import { GLOBAL_STYLE } from "../constants/GLOBAL_STYLE.js";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MainPage = (props) => {
  const {type, item} = useParams();
  return (
    <>
      <GLOBAL_STYLE />
      <Header />
      <Test>ТЕСТ</Test>
      <Footer />
    </>
  );
};

const Test = styled.div`
  border: 1px solid black;
  height: 50%;
`;

export default MainPage;
