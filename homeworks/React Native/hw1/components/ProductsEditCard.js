import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { DefText } from "./../commons";
import { COLORS, images } from "./../styles";

export const ProductsEditCard = ({ item, deleteHandler, editHandler }) => {
  const { name, count, unit } = item;
  return (
    <View style={styles.listItem}>
      <View style={styles.details}>
        <View style={styles.leftSide}>
          <TouchableOpacity onPress={editHandler} style={styles.editBtn}>
            <Image style={styles.img} source={images.editImg} />
          </TouchableOpacity>
          <DefText weight="medium" style={{ fontSize: 14, color: COLORS.TEXT }}>
            {name}
          </DefText>
        </View>

        <View style={styles.rightSide}>
          <DefText weight="medium">
            x {count} &nbsp;
            {unit}
          </DefText>
          <TouchableOpacity onPress={deleteHandler} style={styles.closeBtn}>
            <Image style={styles.img} source={images.closeImg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    height: 39,
    marginBottom: 13,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.SECONDARY,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  details: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSide: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rightSide: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  editBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.SECONDARY,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    marginRight: 15,
  },
  img: {
    height: 20,
    width: 20,
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    marginLeft: 15,
    marginRight: -1,
  },
});
