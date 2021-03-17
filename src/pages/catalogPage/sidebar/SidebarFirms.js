import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SidebarFirms = (props) => {
  const [firms, setFirms] = useState([]);

  useEffect(() => {
    setFirms(
      Array.from(
        new Set(props.goodsItem.map((element) => element.firm))
      ).map((firm, index) => ({ label: firm, id: index, checked: false }))
    );
  }, [props.goodsItem.type]);

  useEffect(() => {
    let filteredFirms = firms
      .filter((firm) => firm.checked)
      .map((firm) => firm.label);
    props.getFilterParam("firms", filteredFirms);
  }, [firms]);

  const checkBoxHandler = (currentID) => {
    setFirms(
      firms.map(({ label, id, checked }) =>
        currentID === id
          ? { label, id, checked: !checked }
          : { label, id, checked }
      )
    );
  };

  return (
    <ButtonContainer>
      {firms.map(({ label, id, checked }) => (
        <ButtonItem key={id}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => checkBoxHandler(id)}
            />
            {label}
          </label>
        </ButtonItem>
      ))}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const ButtonItem = styled.div`
  min-width: 45%;
  width: auto;

  input {
    height: 70%;
  }

  label {
    -webkit-user-select: none;
    user-select: none;
  }
`;

export default SidebarFirms;
