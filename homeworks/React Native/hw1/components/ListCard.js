import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

import { DefText } from "./../commons";

export const ListCard = ({ item, onPress, onLongPress }) => {
  const { name, products, type } = item;
  const productsCount = products.length;
  const boughtCount = products.filter((product) => product.bought === true)
    .length;

  return (
    <View
      style={{
        opacity: boughtCount === productsCount && type === "onetime" ? 0.3 : 1,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.listItem}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <DefText weight="medium" style={{ fontSize: 18 }}>
            {name}
          </DefText>
          <DefText>
            {boughtCount} / {productsCount}
          </DefText>
        </View>
        <Progress.Bar
          borderRadius={20}
          progress={productsCount ? boughtCount / productsCount : 0}
          width={null}
          color="#ffd976"
          unfilledColor="#eeeeee"
          height={20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 7,
    width: "100%",
    borderColor: "#FFD976",
    borderWidth: 2,
    paddingBottom: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
