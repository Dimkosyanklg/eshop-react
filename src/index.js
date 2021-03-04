import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Main/MainPage.js";
import { AppContextProvider } from "./App_Context/AppContext.js";
import CatalogPage from "./Pages/Catalog/CatalogPage.js";

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <Route exact path="/" component={MainPage} />
      <Route path="/catalog/:type" component={CatalogPage} />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
