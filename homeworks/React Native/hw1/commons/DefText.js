import React from "react";
import { Text } from "react-native";
import { FONT_FAMILIES } from "../styles/fonts";

export const DefText = ({ children, weight, style, ...rest }) => {
  const styles = {
    fontFamily: FONT_FAMILIES[weight] || FONT_FAMILIES.regular,
    ...style,
  };
  return (
    <Text style={styles} {...rest}>
      {children}
    </Text>
  );
};
