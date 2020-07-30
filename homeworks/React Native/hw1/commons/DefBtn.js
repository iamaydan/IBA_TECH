import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { DefText } from "./DefText";
import { COLORS } from "./../styles";

export const DefBtn = ({ title, onPress, style, titleStyle = {} }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.btn}>
      <DefText weight="bold" style={{ ...styles.title, ...titleStyle }}>
        {title}
      </DefText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.BG_BODY,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: 35,
  },
  title: {
    fontSize: 14,
    lineHeight: 17,
    color: COLORS.PRIMARY,
    textTransform: "uppercase",
  },
});
