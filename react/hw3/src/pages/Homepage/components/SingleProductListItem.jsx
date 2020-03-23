import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SingleProductListItem = ({ image, name, price, id }) => {
  return (
    <Card>
      <img alt={name} src={image} />
      <h4>{name}</h4>
      <Actions>
        <h3> {price}</h3>
        <i className="fas fa-star"></i>
      </Actions>
      <Button to={`products/${id}`}>Info</Button>
    </Card>
  );
};

const Card = styled.div`
  width: 250px;
  padding: 30px;
  border-radius: 10px;
  margin-right: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;

  img {
    width: 250px;
    height: 250px;
    border-radius: 4px;
  }
`;

const Button = styled(Link)`
  background-color: #cc3333;
  padding: 5px 15px;
  border-radius: 4px;
  text-align: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  i {
    color: lightgrey;
    cursor: pointer;

    &:hover {
      color: #cc3333;
    }
  }
`;
