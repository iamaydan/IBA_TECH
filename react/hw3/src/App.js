import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { ProductsContextProvider } from "./context/products";
import { CartContextProvider } from "./context/cart";

import { Homepage, Cart, Favorite } from "./pages";

function App() {
  return (
    <Router>
      <ProductsContextProvider>
        <CartContextProvider>
          <Switch>
            <Route path="/products" component={Homepage} />
            <Route path="/cart" component={Cart} />
            <Route path="/favorites" component={Favorite} />
          </Switch>
        </CartContextProvider>
      </ProductsContextProvider>
    </Router>
  );
}

export default App;
