import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import {
  HomePage,
  SingleListScreen,
  SingleListEditScreen,
} from "../screens/ListScreens";

import { CreateStack } from "./CreateStack";
import { SettingsStack } from "./SettingsStack";
import { DrawerContent } from "./../components/DrawerContent";

const { Navigator, Screen } = createDrawerNavigator();

export const Drawer = () => {
  return (
    <NavigationContainer>
      <Navigator drawerContent={({ ...props }) => <DrawerContent {...props} />}>
        <Screen name="CreateStack" component={CreateStack} />
        <Screen name="HomePage" component={HomePage} />
        <Screen name="SettingsStack" component={SettingsStack} />
        <Screen name="SingleList" component={SingleListScreen} />
        <Screen name="SingleListEdit" component={SingleListEditScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
