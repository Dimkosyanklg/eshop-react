import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../appContext/AppContext.js";
import { MENU_BUTTONS } from "./MENU_BUTTONS.js";

const Header = () => {
  const { cart } = useContext(AppContext);

  return (
    <HeaderContainer>
      <HeaderTopContainer>
        <img src="/headerIcons/GitHubMark.png" alt="" />
        <SearchBar>
          <form>
            <input type="search" />
            <button type="submit">
              <img src="/headerIcons/SearchIcon.png" alt="" />
            </button>
          </form>
        </SearchBar>
        <ShoppingCartContainer>
          <Link to="/cart">
            <img src="/headerIcons/ShoppingCartIcon.png" alt="" />
          </Link>
          {cart.length ? (
            <ShoppingCartQuantity>{cart.length}</ShoppingCartQuantity>
          ) : (
            <ShoppingCartQuantityNull />
          )}
        </ShoppingCartContainer>
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
};

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
    width: 93%;
    outline: none;
    border: 0;
    border-radius: 0.4rem 0 0 0.4rem;
    font-size: 1.3rem;
  }
  button {
    height: 100%;
    width: 7%;
    outline: none;
    border: 0;
    padding: 0;
    border-radius: 0 0.4rem 0.4rem 0;
    cursor: pointer;
    img {
      height: 35%;
      width: 35%;
      object-fit: contain;
    }
  }
`;

const ShoppingCartContainer = styled.div`
  width: 10%;
  height: 40%;
  display: flex;
  /* justify-content: space-between; */

  img {
    height: 100%;
    filter: brightness(0) invert(1);
  }

  a {
    width: 30%;
  }
`;
const ShoppingCartQuantity = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: red;
  border-radius: 50%;
  font-size: 0.7rem;
  text-align: center;
  text-decoration: none;
  align-self: flex-end;
  color: #ffffff;
  -webkit-user-select: none;
  user-select: none;
`;
const ShoppingCartQuantityNull = styled.div`
  height: 1rem;
  width: 1rem;
  align-self: flex-end;
  visibility: hidden;
`;

export default Header;
