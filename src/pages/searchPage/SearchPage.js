import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GLOBAL_STYLE } from "../../constants/GLOBAL_STYLE.js";
import Header from "../../header/Header.js";
import Footer from "../../footer/Footer.js";
import SearchBody from "./SearchBody.js";
import { useLocation, useParams } from "react-router";

const SearchPage = () => {
  const { searchParam } = useParams();
  const LOCATION = useLocation();

  const [searchValue, setSearchValue] = useState(
    searchParam.replace(/_/g, " ").toLowerCase()
  );
  useEffect(() => {
    setSearchValue(searchParam.replace(/_/g, " ").toLowerCase());
  }, [LOCATION.pathname]);

  return (
    <>
      <GLOBAL_STYLE />
      <Header />
      <Container>
        <SearchBody searchValue={searchValue} />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin: 0 15% 0 15%;
`;

export default SearchPage;
