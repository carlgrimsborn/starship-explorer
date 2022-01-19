import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "overmind-react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useOvermindActions } from "./overmind";
import { useEffect } from "react";
import { config } from "./overmind";
import { createOvermind } from "overmind";
import Home from "./screens/Home";
import Navigation from "./navigation";

const overmind = createOvermind(config);

export default function App() {
  return (
    <Provider value={overmind}>
      <Navigation />
    </Provider>
  );
}
