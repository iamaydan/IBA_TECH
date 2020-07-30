import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen } from "./../screens/SettingsScreen";
import { header } from "./../styles/header";

const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = () => (
  <Navigator screenOptions={header}>
    <Screen
      name="Settings"
      component={SettingsScreen}
      options={{ title: "User  Settings" }}
    />
  </Navigator>
);
