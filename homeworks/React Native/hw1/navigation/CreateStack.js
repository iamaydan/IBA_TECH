import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateScreen } from "./../screens/CreateScreen";
import { header } from "./../styles/header";
const { Navigator, Screen } = createStackNavigator();

export const CreateStack = () => (
  <Navigator screenOptions={header}>
    <Screen
      name="Create"
      component={CreateScreen}
      options={{ title: "New List" }}
    />
  </Navigator>
);
