import React, { useState } from "react";
import { CATALOG_BACKPACKS } from "../store/CATALOG_BACKPACKS.js";
import { CATALOG_SOCCERBALLS } from "../store/CATALOG_SOCCERBALLS.js";
import { findIndex } from "lodash";

const AppContext = React.createContext(null);

const AppContextProvider = (props) => {
  const [store, setStore] = useState([CATALOG_BACKPACKS, CATALOG_SOCCERBALLS]);
  const [cart, setCart] = useState([]);

  const addToCart = (value) => {
    setCart([...cart, value]);
  };

  const removeFromCart = (value) => {
    setCart(cart.filter((element, index) => findIndex(cart, value) !== index));
  };

  return (
    <AppContext.Provider
      value={{ store: store, cart: cart, addToCart, removeFromCart }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
