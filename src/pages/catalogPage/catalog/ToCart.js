import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../appContext/AppContext";
import { findIndex } from "lodash";

const ToCart = (props) => {
  const [button, setButton] = useState({
    status: "outside",
    label: "В корзину",
  });
  const { cart, addToCart, removeFromCart } = useContext(AppContext);

  useEffect(() => {
    if (findIndex(cart, props.goodsItem) > -1) {
      setButton({ status: "inside", label: "Убрать" });
    } else {
      setButton({ status: "outside", label: "В корзину" });
    }
  }, [cart]);

  useEffect(() => {
    if (findIndex(cart, props.goodsItem) > -1) {
      setButton({ status: "inside", label: "Убрать" });
    } else {
      setButton({ status: "outside", label: "В корзину" });
    }
  }, [props.goodsItem]);

  if (button.status === "outside") {
    return (
      <ToCartButton onClick={() => addToCart(props.goodsItem)}>
        {button.label}
      </ToCartButton>
    );
  } else {
    return (
      <RemoveFromCartButton onClick={() => removeFromCart(props.goodsItem)}>
        {button.label}
      </RemoveFromCartButton>
    );
  }
};

const ToCartButton = styled.div`
  font-size: 0.7em;
  border: solid 2px red;
  border-radius: 3px;
  background-color: red;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s;
`;

const RemoveFromCartButton = styled.div`
  font-size: 0.7em;
  border: solid 2px rgb(227, 227, 227);
  border-radius: 3px;
  background-color: rgb(227, 227, 227);
  color: rgb(80, 80, 80);
  text-align: center;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s;
`;

export default ToCart;
