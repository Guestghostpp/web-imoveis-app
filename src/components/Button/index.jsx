import React from "react";
import { Container } from "./style";

export const Button = ({ props, children }) => {
  return <Container {...props}>{children}</Container>;
};
