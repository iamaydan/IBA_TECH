import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { connect } from "react-redux";

import { COLORS, images } from "./../../styles";
import { ListCard } from "./../../components/ListCard";
import { getShopList, deleteList } from "./../../redux/data";

const mapStateToProps = (state) => ({
  shopLists: getShopList(state),
});

export const HomePage = connect(mapStateToProps, { deleteList })((props) => {
  const { navigation, shopLists, deleteList, route } = props;
  const title = route.params.title;
  const type = route.params.type;
  const shopList = shopLists.filter((item) => item.type === type);

  const deleteHandler = (id) => {
    Alert.alert("The list will be deleted", "Are you sure?", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        onPress: () => deleteList({ id }),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title} </Text>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image style={styles.menuImg} source={images.menuImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.listsContainer}>
          {shopList.map((item) => (
            <ListCard
              item={item}
              key={item.id}
              onPress={() =>
                navigation.navigate("SingleList", {
                  name: item.name,
                  listID: item.id,
                  products: item.products,
                })
              }
              onLongPress={() => deleteHandler(item.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7676",
  },
  header: {
    flexDirection: "row",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 16,
    color: COLORS.BG_BODY,
    fontWeight: "500",
  },
  menuBtn: {
    padding: 10,
    right: 5,
    position: "absolute",
    zIndex: 2,
  },
  menuImg: {
    width: 30,
    height: 22,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  listsContainer: {
    width: "95%",
    marginTop: 16,
  },
});
