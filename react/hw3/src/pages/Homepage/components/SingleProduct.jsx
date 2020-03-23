import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { productsContext } from "../../../context/products";
import { CartContext } from "../../../context/cart";

export const SingleProduct = ({
  history: { push },
  match: {
    params: { id }
  }
}) => {
  const productsList = useContext(productsContext);
  const { addToCart } = useContext(CartContext);

  const product = productsList.find(item => item.id == id);
  return (
    <Container>
      {product && (
        <Popup>
          Do you want to add this item to your cart?
          <Close onClick={() => push("/products")}>X</Close>
          <Image src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <Actions>
            <Button
              onClick={() => {
                push("/products");
                addToCart(product);
              }}
            >
              Add
            </Button>
            <Button onClick={() => push("/products")}>Cancel</Button>
          </Actions>
        </Popup>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Popup = styled.div`
  width: 96%;
  padding: 30px;
  text-align: center;
  max-width: 500px;
  color: black;
  border-radius: 10px;
  background: #fff;
  position: relative;
`;

const Image = styled.img`
  display: block;
  margin: 10px auto;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100%;
`;

const Close = styled.button`
  display: block;
  color: #cc3333;
  background-color: #fff;
  font-size: 20px;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(Link)`
  background-color: #000;
  width: 100px;
  padding: 15px 0;
  margin: 13px;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.1);
  }

  &:first-child {
    background-color: #cc3333;
  }
`;
