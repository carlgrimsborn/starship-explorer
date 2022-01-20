import { Action, AsyncAction } from "overmind";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStarships: AsyncAction = async ({ effects, state }) => {
  state.loading = true;
  try {
    await effects.gql.queries.getStarshipsQuery().then((r) => {
      state.starShips = r.allStarships.starships;
      state.loading = false;
    });
  } catch (e) {
    Alert.alert(e.toString());
  }
};

export const setSelectedStarshipIndex: Action<number> = ({ state }, index) => {
  state.selectedStarShipIndex = index;
};

export const setSelectedPilotIndex: Action<number> = ({ state }, index) => {
  state.selectedPilotIndex = index;
};

export const setTheme: Action<"jedi" | "sith"> = (
  { state },
  theme: "jedi" | "sith"
) => {
  AsyncStorage.setItem("theme", theme);
  state.theme = theme;
};

export const getTheme: AsyncAction = async ({ state }) => {
  const response = await AsyncStorage.getItem("theme");
  if (response === "jedi" || response === "sith") {
    state.theme = response;
  }
};
