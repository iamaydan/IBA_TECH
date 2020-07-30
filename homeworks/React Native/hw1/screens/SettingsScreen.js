import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button,
} from "react-native";
import { connect } from "react-redux";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";


import { COLORS } from "./../styles";
import { DefText, DefInput } from "../commons";
import { getUserInfo, setUserInfo } from "./../redux/userData";

const getPermissions = async () => {
  const answer = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );

  if (answer.status !== "granted") {
    Alert.alert("Access denied. Go to your device settings and enable access.");
    return false;
  }
  return true;
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
});

export const SettingsScreen = connect(mapStateToProps, {
  setUserInfo,
  getUserInfo,
})((props) => {
  const { setUserInfo, userInfo } = props;
  const [fields, setFields] = useState({
    username: userInfo.username,
    imgUri: userInfo.imgUri,
  });

  const authChangeHandler = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const setUserInfoHandler = () => {
    setUserInfo({ username: fields.username, imgUri: fields.imgUri });
    Alert.alert("Saved");
  };
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    (async () => {
      const permissionStatus = await getPermissions();
      setAccessGranted(permissionStatus);
    })();
  }, []);

  const chooseFromLibrary = async () => {
    if (accessGranted) {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
      });
      if (!image.cancelled) {
        authChangeHandler("imgUri", image.uri);
      }
    } else {
      Alert.alert("Couldn't access to gallery");
    }
  };

  const runCamera = async () => {
    if (accessGranted) {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
      });
      if (!image.cancelled) {
        authChangeHandler("imgUri", image.uri);
      }
    } else {
      Alert.alert("Couldn't access to camera");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.content}>
            <DefText style={styles.listName}>username</DefText>
            <View style={styles.outerInput}>
              <DefInput
                value={fields.username}
                onChangeText={(val) => authChangeHandler("username", val)}
                placeholder="John Doe"
              />
            </View>

            <DefText style={styles.listName}>avatar url</DefText>
            <View style={[styles.outerInput, { marginBottom: 20 }]}>
              <DefInput
                value={fields.imgUri}
                onChangeText={(val) => authChangeHandler("imgUri", val)}
                placeholder="Paste image url here"
              />
            </View>

            <Button
              onPress={chooseFromLibrary}
              title="Choose an image from library"
            />
            <DefText>or</DefText>
            <Button onPress={runCamera} title="Take photo now" />

            <TouchableOpacity
              onPress={setUserInfoHandler}
              style={styles.saveBtn}
            >
              <DefText
                weight="bold"
                style={{
                  color: COLORS.BG_BODY,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Save Changes
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
  headerContainer: {
    flexDirection: "row",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
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

  saveBtn: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
    marginTop: 15,
    width: "100%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  gallery: {
    width: 25,
    height: 25,
  },
});
