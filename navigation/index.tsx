import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import BasicText from "../components/BasicText";
import About from "../screens/About";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Pilot from "../screens/Pilot";
import Pilots from "../screens/Pilots";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

type RightHeaderProps = {
  onPress: () => void;
};

const MyTheme = () => {
  return {
    dark: false,
    colors: {
      primary: false ? "rgb(31,117,254)" : "rgb(139,0,0)",
      background: false ? "rgb(220,220,220)" : "#626262",
      text: false ? "#252525" : "#dcdbdb",
      card: false ? "rgb(31,117,254)" : "rgb(139,0,0)",
      border: "black",
      notification: "white",
    },
  };
};

const Rightheader: React.FC<RightHeaderProps> = ({ onPress }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        setToggle(!toggle);
      }}
    >
      <BasicText style={[styles.text, { color: MyTheme().colors.primary }]}>
        {toggle ? "jedi theme" : "sith theme"}
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
        headerRight: () => <Rightheader onPress={() => {}} />,
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
