import React from "react";
import styled from "styled-components";

import { FirstSection } from "./FirstSection";
import { LastSection } from "./LastSection";

export const Layout = ({ children }) => {
  return (
    <div>
      <FirstSection />
      <div>{children}</div>
      <LastSection />
    </div>
  );
};
