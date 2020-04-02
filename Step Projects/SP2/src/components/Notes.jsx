import React from "react";

import styled from "styled-components";

export const Notes = ({ notes: { id, text, title, date, color } }) => {
  let dateObj = new Date(date);
  const day = dateObj.getDay();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return (
    <Container color={color}>
      <Header>
        <Title>{title}</Title>
        <StyledDate>
          {day}/{month}/{year}
        </StyledDate>
      </Header>
      <hr />
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  background-color: ${p => p.color};
  margin: 20px;
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  hr {
    width: 170px;
  }
`;

const Header = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const StyledDate = styled.div`
  font-size: 13px;
  margin-left: 10px;
  color: white;
`;

const Text = styled.div`
  padding: 20px;
`;
