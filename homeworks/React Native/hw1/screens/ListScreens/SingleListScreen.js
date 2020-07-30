import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";

import { COLORS, images } from "./../../styles";
import { DefText } from "./../../commons";
import { ProductsCard } from "./../../components/ProductsCard";
import { getShopList, changeStatus, resetItems } from "./../../redux/data";

const mapStateToProps = (state) => ({
  shopLists: getShopList(state),
});

export const SingleListScreen = connect(mapStateToProps, {
  changeStatus,
  resetItems,
})((props) => {
  const { navigation, route, changeStatus, resetItems, shopLists } = props;
  const id = route.params?.listID;
  const name = route.params?.name;
  const type = route.params?.type;
  const shopList = shopLists.find((item) => item.id === id);
  const products = shopList?.products;
  const boughtProducts = products?.filter((item) => item.bought === true);

  const boughtHandler = (id, itemID) => {
    changeStatus({ id, itemID });
  };

  const resetHandler = () => {
    resetItems({ id: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: "95%", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() =>
              route.params?.type
                ? navigation.navigate("HomePage", {
                    type: type,
                    title:
                      type === "onetime" ? "One Time Lists" : "Regular Lists",
                  })
                : navigation.navigate("HomePage", {
                    type: shopList.type,
                    title:
                      shopList.type === "onetime"
                        ? "One Time Lists"
                        : "Regular Lists",
                  })
            }
          >
            <Image style={styles.backImg} source={images.backImg} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name}</Text>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => {
              navigation.navigate("SingleListEdit", {
                name: name,
                listID: id,
                products: products,
                type: type,
              });
            }}
          >
            <Image style={styles.editImg} source={images.editImg} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView style={{ width: "95%" }}>
          <View style={styles.subheader}>
            <TouchableOpacity onPress={resetHandler} style={styles.resetBtn}>
              <DefText
                style={{
                  color: COLORS.BG_BODY,
                  textTransform: "uppercase",
                  fontSize: 10,
                }}
              >
                Reset
              </DefText>
            </TouchableOpacity>

            <View>
              <DefText>
                {boughtProducts?.length || 0} &nbsp; / &nbsp;
                {products?.length || 0}
              </DefText>
            </View>
          </View>

          {products?.map((item) => (
            <ProductsCard
              key={item.id}
              item={item}
              onLongPress={() => boughtHandler(id, item.id)}
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
  },
  editBtn: {
    right: 0,
    position: "absolute",
    zIndex: 2,
  },
  editImg: {
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
  resetBtn: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
    width: "15%",
    paddingVertical: 4,
    alignItems: "center",
  },
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
