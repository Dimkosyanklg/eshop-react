import React, { useState } from "react";
import { CATALOG_BACKPACKS } from "../store/CATALOG_BACKPACKS.js";
import { CATALOG_SOCCERBALLS } from "../store/CATALOG_SOCCERBALLS.js";

const AppContext = React.createContext(null);

const AppContextProvider = (props) => {
  const [store, setStore] = useState([
    CATALOG_BACKPACKS,
    CATALOG_SOCCERBALLS,
  ]);
  return <AppContext.Provider value={store}>{props.children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
