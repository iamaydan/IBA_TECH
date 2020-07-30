import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { DefText } from "./DefText";
import { COLORS, getWidthByPercents } from "./../styles";

export const DefRadioBtns = ({
  options,
  value,
  onValueChange,
  contentContainerStyle,
  radioItemStyle,
}) => (
  <View style={[styles.container, contentContainerStyle]}>
    {options.map((option) => {
      const isActive = value === option;
      return (
        <TouchableOpacity
          onPress={() => onValueChange(option)}
          style={{
            width: getWidthByPercents(100 / options.length, options.length + 1),
          }}
          key={option}
        >
          <View
            style={[
              styles.radioBtn,
              { opacity: isActive ? 1 : 0.3 },
              radioItemStyle,
            ]}
          >
            <DefText
              weight={isActive ? "bold" : "regular"}
              style={styles.radioLabel}
            >
              {option}
            </DefText>
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioBtn: {
    height: 42,
    borderRadius: 25,
    backgroundColor: COLORS.BG_GREYISH,
    justifyContent: "center",
    alignItems: "center",
  },
});
