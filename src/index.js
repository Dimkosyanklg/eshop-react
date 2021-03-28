import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./main/MainPage.js";
import { AppContextProvider } from "./appContext/AppContext.js";
import CatalogPage from "./pages/catalogPage/catalog/CatalogPage.js";
import CartPage from "./pages/cartPage/CartPage.js";
import CatalogItemPage from "./pages/catalogItemPage/CatalogItemPage.js";
ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/catalog/:type" component={CatalogPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/catalog/:type/:item" component={CatalogItemPage} />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
