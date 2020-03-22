import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SingleProductListItem = ({ image, name, price, id }) => {
  return (
    <Card>
      <img alt={name} src={image} />
      <h4>{name}</h4>
      <Info>
        <Price> {price}</Price>
        <Button to={`products/${id}`}>Info</Button>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  width: 210px;
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  img {
    width: 210px;
    height: 200px;
    border-radius: 4px;
    margin: 15px 0;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

const Button = styled(Link)`
  background-color: #000;
  padding: 5px 15px;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Price = styled.h3`
  background-color: #cc3333;
  color: white;
  padding: 3px;
`;
