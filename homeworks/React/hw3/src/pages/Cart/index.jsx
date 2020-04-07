import React, { useContext } from "react";
import styled from "styled-components";
import { Layout2 } from "../../commons";

import { CartContext } from "../../context/cart";

export const Cart = () => {
  const { cartProducts, removeFromCart } = useContext(CartContext);

  return (
    <Layout2>
      {cartProducts.length == 0 ? (
        <h2 style={{ margin: "auto" }}>Nothing Added Yet</h2>
      ) : (
        cartProducts.map(({ uniqLocalId, name, price, image }, i) => (
          <Card key={uniqLocalId * i}>
            <img src={image} alt={name} />
            <Info>
              <h5>{name}</h5>
              <h4>{price}</h4>
              <Button onClick={() => removeFromCart(uniqLocalId)}>
                Remove From Cart
              </Button>
            </Info>
          </Card>
        ))
      )}
    </Layout2>
  );
};

const Card = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  margin-right: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  display: flex;
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;

  img {
    width: 150px;
    height: 150px;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  background-color: #cc3333;
  padding: 5px 15px;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 20px;
`;
