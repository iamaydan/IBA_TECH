import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { connect } from "react-redux";

import { COLORS, images } from "../../styles";
import { DefText, DefRadioBtns } from "../../commons";
import { ProductsEditCard } from "../../components/ProductsEditCard";

import { getShopList, addItem, deleteItem, updateItem } from "../../redux/data";

const UNITS = ["pkg", "kg", "litre", "bott"];

const mapStateToProps = (state) => ({
  shopLists: getShopList(state),
});

export const SingleListEditScreen = connect(mapStateToProps, {
  addItem,
  deleteItem,
  updateItem,
})((props) => {
  const {
    navigation,
    route,
    shopLists,
    addItem,
    deleteItem,
    updateItem,
  } = props;
  // const shopList = shopLists.find((item) => item.id === id);
  const id = route.params?.listID;
  const nameo = route.params?.name;
  const products = route.params?.products;
  const type = route.params?.type;

  const initialState = {
    id: "",
    name: "",
    unit: UNITS[0],
  };
  const [isEdit, setIsEdit] = useState(false);
  const [count, setCount] = useState(2);
  const [fields, setFields] = useState(initialState);

  const fieldChangeHandler = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };
  const decreaseHandler = () => {
    if (count > 1) setCount((count) => count - 1);
  };
  const increaseHandler = () => setCount((count) => count + 1);

  const resetField = () => {
    setFields({ initialState });
    setCount(2);
  };

  const addItemHandler = () => {
    if (fields.name.trim() !== "") {
      addItem({
        id: id,
        name: fields.name,
        unit: fields.unit,
        count: count,
      });
      console.log(
        "added",
        id,
        fields.name,
        fields.unit,
        count,
        route.params.listID
      );
      resetField();
      setIsEdit(false);
    } else {
      Alert.alert("Please fill all fields");
    }
  };

  const deleteItemHandler = (itemID) => {
    Alert.alert("The product will be deleted", "Are you sure?", [
      {
        text: "No",
      },
      {
        text: "Yes",
        onPress: () => deleteItem({ id: id, itemID: itemID }),
      },
    ]);
  };
  const editItemHandler = (item) => {
    setFields(item);
    setCount(item.count);
    setIsEdit(true);
  };

  const updateItemHandler = () => {
    updateItem({
      id: id,
      item: {
        id: fields.id,
        name: fields.name,
        count: count,
        unit: fields.unit,
      },
    });
    resetField();
    setIsEdit(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: "95%", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              navigation.navigate("SingleList", {
                name: nameo,
                listID: id,
                products: products,
                type: type,
              });
            }}
          >
            <Image style={styles.backImg} source={images.backImg} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{nameo}</Text>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => {
              Alert.alert("Saved");

              navigation.navigate("SingleList", {
                name: nameo,
                listID: id,
                products: products,
                type: type,
              });
            }}
          >
            <Image style={styles.saveImg} source={images.saveImg} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView style={{ width: "95%" }}>
          <View style={styles.subheader}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
              }}
            >
              <DefText style={styles.listName}>position name</DefText>
              <View style={styles.outerInput}>
                <TextInput
                  placeholder="milk"
                  style={{ fontWeight: "600", fontSize: 16 }}
                  onChangeText={(value) => fieldChangeHandler("name", value)}
                  value={fields.name}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "25%",
              }}
            >
              <DefText style={styles.listName}>count</DefText>
              <View style={styles.count}>
                <TouchableOpacity onPress={decreaseHandler}>
                  <DefText weight="bold" style={{ fontSize: 22 }}>
                    -
                  </DefText>
                </TouchableOpacity>
                <TextInput
                  placeholder="1"
                  keyboardType="number-pad"
                  onChangeText={setCount}
                  value={count.toString()}
                  style={{
                    fontSize: 17,
                    height: 35,
                    textAlign: "center",
                    maxWidth: 60,
                  }}
                />
                <TouchableOpacity onPress={increaseHandler}>
                  <DefText weight="bold" style={{ fontSize: 20 }}>
                    +
                  </DefText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <DefRadioBtns
            value={fields.unit}
            onValueChange={(value) => fieldChangeHandler("unit", value)}
            contentContainerStyle={styles.types}
            options={UNITS}
          />
          {isEdit ? (
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  resetField();
                  setIsEdit(false);
                }}
                style={[styles.addBtn, { width: "45%" }]}
              >
                <DefText
                  weight="bold"
                  style={{ color: "#fff", textTransform: "uppercase" }}
                >
                  Cancel
                </DefText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={updateItemHandler}
                style={[styles.addBtn, { width: "45%" }]}
              >
                <DefText
                  weight="bold"
                  style={{ color: "#fff", textTransform: "uppercase" }}
                >
                  Update
                </DefText>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={addItemHandler} style={styles.addBtn}>
              <DefText
                weight="bold"
                style={{ color: "#fff", textTransform: "uppercase" }}
              >
                Add to list
              </DefText>
            </TouchableOpacity>
          )}

          <View
            style={{
              borderColor: "#e5e5e5",
              borderBottomWidth: 1,
              marginBottom: 30,
            }}
          ></View>
          {products?.map((item) => (
            <ProductsEditCard
              item={item}
              key={item.id}
              deleteHandler={() => deleteItemHandler(item.id)}
              editHandler={() => editItemHandler(item)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  types: {
    marginVertical: 14,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  header: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    left: 0,
    position: "absolute",
    zIndex: 2,
  },
  backImg: {
    width: 25,
    height: 17,
  },
  headerTitle: {
    fontSize: 16,
    color: COLORS.BG_BODY,
    fontWeight: "500",
  },
  saveBtn: {
    right: 0,
    position: "absolute",
    zIndex: 2,
  },
  saveImg: {
    width: 20,
    height: 18,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  subheader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
  },
  listName: {
    color: "#303234",
    opacity: 0.75,
    paddingVertical: 10,
    fontSize: 12,
  },
  outerInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  innerInput: {
    color: COLORS.TEXT,
    fontWeight: "700",
  },
  count: {
    flexDirection: "row",
    backgroundColor: COLORS.BG_GREYISH,
    borderRadius: 20,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  unitsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    marginBottom: 14,
  },
  units: {
    width: "18%",
    height: "100%",
  },
  unit: {
    backgroundColor: COLORS.BG_GREYISH,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  addBtn: {
    height: 35,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
