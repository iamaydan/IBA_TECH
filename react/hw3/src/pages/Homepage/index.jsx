import React from "react";
import { Route } from "react-router-dom";

import { Layout } from "../../commons";
import { ProductsList, SingleProduct } from "./components";

export const Homepage = () => {
  return (
    <Layout>
      <ProductsList />
      <Route path="/products/:id" component={SingleProduct} />
    </Layout>
  );
};
