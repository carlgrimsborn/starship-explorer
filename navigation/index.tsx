import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import BasicText from "../components/BasicText";
import { useOvermindActions, useOvermindState } from "../overmind";
import About from "../screens/About";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Pilot from "../screens/Pilot";
import Pilots from "../screens/Pilots";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = () => {
  const { theme } = useOvermindState();
  const isJedi = theme === "jedi";
  return {
    dark: false,
    colors: {
      primary: isJedi ? "rgb(31,117,254)" : "rgb(139,0,0)",
      background: isJedi ? "rgb(220,220,220)" : "#626262",
      text: isJedi ? "#252525" : "#dcdbdb",
      card: isJedi ? "rgb(31,117,254)" : "rgb(139,0,0)",
      border: "black",
      notification: "white",
    },
  };
};

type RightHeaderProps = {
  onPress?: () => void;
};

const Rightheader: React.FC<RightHeaderProps> = ({ onPress }) => {
  const { setTheme } = useOvermindActions();
  const { theme } = useOvermindState();

  return (
    <TouchableOpacity
      onPress={() => setTheme(theme === "jedi" ? "sith" : "jedi")}
    >
      <BasicText style={[styles.text, { color: MyTheme().colors.primary }]}>
        {theme === "jedi" ? "jedi theme" : "sith theme"}
      </BasicText>
    </TouchableOpacity>
  );
};

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Group
      screenOptions={{
        headerStyle: { backgroundColor: MyTheme().colors.background },
        headerBackTitle: "Back",
        headerRight: () => <Rightheader />,
      }}
    >
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
  <NavigationContainer linking={LinkingConfiguration} theme={MyTheme()}>
    <RootNavigator></RootNavigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
  containerBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Navigation;
