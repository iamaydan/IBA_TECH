import React, { useContext } from "react";
import { Layout } from "../../commons";

import { CartContext } from "../../context/cart";

export const Cart = () => {
  const { cartProducts, removeFromCart } = useContext(CartContext);

  return (
    <Layout>
      <h1>Cart</h1>
      {cartProducts.map(({ uniqLocalId, name, price, image }, i) => (
        <div key={uniqLocalId * i}>
          <img src={image} alt={name} />
          <h5>
            {name} --- {price}
          </h5>
          <button onClick={() => removeFromCart(uniqLocalId)}>Remove</button>
        </div>
      ))}
    </Layout>
  );
};
