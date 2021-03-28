import React, { useState } from "react";
import styled from "styled-components";
import SidebarFirms from "./SidebarFirms.js";
import SidebarPrice from "./SidebarPrice.js";

const Sidebar = (props) => {
  const [filterParams, setFilterParams] = useState({});

  const getFilterParam = (filterParam, value) => {
    setFilterParams({ ...filterParams, [filterParam]: value });
  };

  return (
    <SidebarContainer>
      <SortHeader>Производители</SortHeader>
      <SidebarFirms
        goodsItem={props.goodsItem}
        getFilterParam={getFilterParam}
      />
      <SortHeader>Цена</SortHeader>
      <SidebarPrice
        goodsItem={props.goodsItem}
        getFilterParam={getFilterParam}
      />
      <SendButton onClick={() => props.getFilters(filterParams)}>
        Подобрать
      </SendButton>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  margin-top: 2%;
  width: 20%;
  height: 35vw;
  background-color: #fff6da;
  & > * {
    margin: 2% 0 0 5%;
  }
`;

const SortHeader = styled.div`
  font-weight: 600;
`;

const SendButton = styled.button`
  width: 80%;
  height: 5%;
  font-size: 1rem;
  margin: 2% 10% 2% 10%;
`;

export default Sidebar;
