import React from "react";
import { StyleSheet, TextInput, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "./../styles";

export const DefInput = ({ style, ...rest }) => {
  return (
    <TouchableWithoutFeedback>
      <TextInput style={[styles.innerInput, style]} {...rest} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  outerInput: {
    width: "100%",
    height: 35,
    backgroundColor: COLORS.BG_GREYISH,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  innerInput: {
    color: COLORS.TEXT,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "MontserratRegular",
  },
});
