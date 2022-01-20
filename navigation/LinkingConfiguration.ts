import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Home: "Home",
      About: "About",
      Movies: "Movies",
      Pilot: "Pilot",
      Pilots: "Pilots",
    },
  },
};

export default linking;
