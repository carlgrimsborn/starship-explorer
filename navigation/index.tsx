import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import About from "../screens/About";
import Home from "../screens/Home";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: "Starship Explorer" }}
    ></Stack.Screen>
    <Stack.Screen
      name="About"
      component={About}
      options={({ route }) => ({ title: route.params.title })}
    ></Stack.Screen>
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
    <RootNavigator></RootNavigator>
  </NavigationContainer>
);

export default Navigation;
