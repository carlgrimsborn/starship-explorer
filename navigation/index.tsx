import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import About from "../screens/About";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Pilot from "../screens/Pilot";
import Pilots from "../screens/Pilots";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Group>
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
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{ title: "Movies" }}
      ></Stack.Screen>
      <Stack.Screen
        name="Pilots"
        component={Pilots}
        options={{ title: "Pilots" }}
      ></Stack.Screen>
    </Stack.Group>
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="Pilot"
        component={Pilot}
        options={({ route }) => ({ title: route.params.title })}
      ></Stack.Screen>
    </Stack.Group>
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
    <RootNavigator></RootNavigator>
  </NavigationContainer>
);

export default Navigation;
