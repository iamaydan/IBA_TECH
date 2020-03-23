import React from "react";
import styled from "styled-components";

import { FirstSection } from "./FirstSection";
import { LastSection } from "./LastSection";

export const Layout = ({ children }) => {
  return (
    <div>
      <FirstSection />
      <section className="latest-arrivals">
        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="latest-arrivals-title">LATEST ARRIVALS IN MUSICA</div>
        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="seperator"></div>
        <Children>{children}</Children>
      </section>
      <LastSection />
    </div>
  );
};

const Children = styled.div`
  margin: 30px auto;
`;
