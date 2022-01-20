import { OnInitialize } from "overmind";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const onInitialize: OnInitialize = ({ effects, actions }) => {
  effects.gql.initialize({
    endpoint: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  });
  actions.getTheme();
};
