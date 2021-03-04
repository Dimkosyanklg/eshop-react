import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { MENU_BUTTONS } from "./MENU_BUTTONS.js";

const Header = () => (
  <HeaderContainer>
    <HeaderTopContainer>
      <img src="Header_Icons/GitHub-Mark-Light-120px-plus.png" alt="" />
      <SearchBar>
        <form>
          <input type="search" />
          <button type="submit">
            <img src="Header_Icons/iconfinder_search_1608826.png" alt="" />
          </button>
        </form>
      </SearchBar>
      <ShoppingCartBlock>
        <Link to="/cart">
          <img src="Header_Icons/iconfinder_shopping-cart.png" alt="" />
        </Link>
      </ShoppingCartBlock>
    </HeaderTopContainer>
    <HeaderNavigationContainer>
      {MENU_BUTTONS.map(({ id, title, link }) => (
        <HeaderNavigationLink key={id}>
          <NavLink activeStyle={{ color: "red" }} to={link}>
            {title}
          </NavLink>
        </HeaderNavigationLink>
      ))}
    </HeaderNavigationContainer>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  height: 8vw;
`;

const HeaderTopContainer = styled.div`
  height: 70%;
  background-color: #005aab;
  padding: 0 15% 0 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 70%;
  }
`;

const HeaderNavigationContainer = styled.div`
  height: 30%;
  margin: 0 15% 0 15%;
  display: flex;
  justify-content: space-between;
`;

const HeaderNavigationLink = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: rgb(100, 100, 100);
    font-size: 0.9rem;
  }
`;

const SearchBar = styled.div`
  width: 60%;
  height: 50%;
  form {
    height: 100%;
    display: flex;
  }
  input {
    height: 100%;
    width: 90%;
    outline: none;
    border: 0;
    border-radius: 0.4rem 0 0 0.4rem;
    font-size: 1.3rem;
  }
  button {
    height: 100%;
    width: 10%;
    outline: none;
    border: 0;
    padding: 0;
    border-radius: 0 0.4rem 0.4rem 0;
    cursor: pointer;
    img {
      height: 40%;
    }
  }
`;

const ShoppingCartBlock = styled.div`
  width: 10%;
  height: 40%;
  text-align: center;
  img {
    height: 100%;
    filter: brightness(0) invert(1);
  }
`;

export default Header;
