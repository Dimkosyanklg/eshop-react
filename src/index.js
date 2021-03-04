import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./main/MainPage.js";
import { AppContextProvider } from "./appContext/AppContext.js";
import CatalogPage from "./pages/catalog/CatalogPage.js";

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <Route exact path="/" component={MainPage} />
      <Route path="/catalog/:type" component={CatalogPage} />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
