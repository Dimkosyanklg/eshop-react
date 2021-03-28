import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../appContext/AppContext";

/* Функция для падежа существительного в зависимости от числа */
function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}
/* ------------------------------------------------------------- */

const CartHeader = () => {
  const { cart } = useContext(AppContext);
  return (
    <>
      <CartHead>
        Корзина ({cart.length}{" "}
        {getNoun(cart.length, "товар", "товара", "товаров")})
      </CartHead>
      <ItemsHead>
        <Item>Товар</Item>
        <Receiving>Способ получения</Receiving>
        <Price>Цена</Price>
        <Quantity>Количество</Quantity>
        <Sum>Сумма</Sum>
      </ItemsHead>
    </>
  );
};

const CartHead = styled.div`
  font-size: 2em;
  border-bottom: 1px solid #e4e4e4;
`;

const ItemsHead = styled.div`
  display: flex;
  font-size: 1em;
  margin-top: 20px;
  background-color: #f5f5f5;
`;

const Item = styled.div`
  width: 23%;
  padding-left: 2%;
`;

const Receiving = styled.div`
  width: 25%;
`;

const Price = styled.div`
  width: 15%;
  text-align: center;
`;

const Quantity = styled.div`
  width: 15%;
  text-align: center;
`;

const Sum = styled.div`
  width: 20%;
  text-align: center;
`;

export default CartHeader;
