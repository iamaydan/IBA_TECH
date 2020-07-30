import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { DefText } from "./../commons";
import { COLORS, images } from "./../styles";
import { getUserInfo } from "./../redux/userData";

export const DrawerContent = ({ navigation }) => {
  const { username, imgUri } = useSelector(getUserInfo);
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.profileImg}
          source={imgUri ? { uri: imgUri } : images.profileImg}
        />
        <DefText style={styles.username}>{username || "Username"}</DefText>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateStack")}
          style={[styles.drawerBtn, { marginTop: 16, marginBottom: 32 }]}
        >
          <DefText weight="bold" style={styles.drawerBtnLabel}>
            Add New List
          </DefText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("HomePage", {
              type: "onetime",
              title: "One Time Lists",
            })
          }
          style={styles.drawerBtn}
        >
          <DefText weight="bold" style={styles.drawerBtnLabel}>
            One Time Lists
          </DefText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("HomePage", {
              type: "regular",
              title: "Regular Lists",
            })
          }
          style={styles.drawerBtn}
        >
          <DefText weight="bold" style={styles.drawerBtnLabel}>
            Regular Lists
          </DefText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsStack")}
          style={styles.drawerBtn}
        >
          <DefText weight="bold" style={styles.drawerBtnLabel}>
            User Settings
          </DefText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "8%",
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 16,
    marginRight: 22,
    zIndex: 2,
  },
  username: {
    color: "#303234",
    opacity: 0.65,
    fontSize: 24,
    lineHeight: 29,
  },
  btnContainer: {
    flex: 1,
    backgroundColor: "#ff7676",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  drawerBtn: {
    backgroundColor: COLORS.BG_BODY,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: 35,
  },
  drawerBtnLabel: {
    fontSize: 14,
    lineHeight: 17,
    color: "#ff7676",
    textTransform: "uppercase",
  },
});
