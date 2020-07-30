import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";

import { COLORS } from "./../styles";
import { DefText, DefInput, DefRadioBtns } from "../commons";
import { getShopList, createList, createID } from "../redux/data";

const LIST_TYPES = ["onetime", "regular"];

const mapStateToProps = (state) => ({
  shopLists: getShopList(state),
});

export const CreateScreen = connect(mapStateToProps, {
  createList,
})(({ createList, navigation }) => {
  const [fields, setFields] = useState({
    name: "",
    type: LIST_TYPES[0],
  });
  const fieldChangeHandler = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const createHandler = () => {
    const shopList = {
      id: createID(),
      name: fields.name,
      type: fields.type,
      products: [],
    };

    if (fields.name.trim() !== "") {
      createList(shopList);
      navigation.navigate("SingleListEdit", {
        name: shopList.name,
        listID: shopList.id,
        products: shopList.products,
        type: shopList.type,
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.content}>
            <DefText style={styles.listName}>list name</DefText>
            <View style={styles.outerInput}>
              <DefInput
                onChangeText={(val) => fieldChangeHandler("name", val)}
                placeholder="Something for me"
              />
            </View>

            <View style={styles.btnContainer}>
              <DefRadioBtns
                options={LIST_TYPES}
                value={fields.type}
                onValueChange={(value) => fieldChangeHandler("type", value)}
              />
            </View>
            <TouchableOpacity style={styles.createBtn} onPress={createHandler}>
              <DefText
                weight="bold"
                style={{
                  color: COLORS.BG_BODY,
                  textTransform: "uppercase",
                }}
              >
                Create List
              </DefText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  header: {
    flexDirection: "row",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  headername: {
    fontSize: 18,
    color: COLORS.BG_BODY,
    fontWeight: "500",
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  content: {
    width: "80%",
    alignItems: "center",
  },
  listName: {
    color: "#303234",
    opacity: 0.75,
    paddingVertical: 10,
  },
  outerInput: {
    width: "100%",
    height: 35,
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 15,
    justifyContent: "space-between",
  },

  listStyleBtn: {
    backgroundColor: "#eeeeee",
    height: 35,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  createBtn: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
    width: "100%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
