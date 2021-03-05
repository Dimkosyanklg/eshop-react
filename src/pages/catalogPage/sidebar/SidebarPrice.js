import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SidebarPrice = (props) => {
  const [price, setPrice] = useState({ from: "", to: "" });

  useEffect(() => {
    props.getFilterParam("price", price);
  }, [price]);

  const inputHandler = (e) => {
    e.preventDefault();
    if (e.key.charCodeAt(0) === 48 && !e.target.value.length) {
      e.target.value = "";
    } else {
      if (e.key.charCodeAt(0) >= 48 && e.key.charCodeAt(0) <= 57) {
        e.target.value += e.key;
      }
    }
    setPrice({ ...price, [e.target.name]: e.target.value });
  };
  const inputDeleteHandler = (e) => {
    setPrice({ ...price, [e.target.name]: e.target.value });
  };

  return (
    <InputContainer>
      <InputItem>
        <label>
          от{" "}
          <input
            type="text"
            name="from"
            onKeyPress={(e) => inputHandler(e)}
            onInput={(e) => inputDeleteHandler(e)}
            onPaste={(e) => e.preventDefault()}
          />
        </label>
      </InputItem>
      <InputItem>
        <label>
          до{" "}
          <input
            type="text"
            name="to"
            onKeyPress={(e) => inputHandler(e)}
            onInput={(e) => inputDeleteHandler(e)}
            onPaste={(e) => e.preventDefault()}
          />
        </label>
      </InputItem>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 5%;
`;

const InputItem = styled.div`
  min-width: 50%;
  font-size: 1rem;

  input {
    width: 50%;
    height: 60%;
    outline: none;
    font-size: 0.9rem;
  }
`;

export default SidebarPrice;
