import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { DefText } from "./../commons";
import { COLORS } from "./../styles";

export const ProductsCard = ({ item, onLongPress }) => {
  const { name, count, unit, bought } = item;
  return (
    <TouchableOpacity onLongPress={onLongPress} style={styles.listItem}>
      <View style={[styles.details, { opacity: bought ? 0.2 : 1 }]}>
        <DefText weight="medium" style={{ fontSize: 14, color: COLORS.TEXT }}>
          {name}
        </DefText>
        <DefText weight="medium">
          x {count} &nbsp;
          {unit}
        </DefText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 13,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.SECONDARY,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
