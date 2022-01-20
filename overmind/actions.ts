import { Action, AsyncAction } from "overmind";
import { Alert } from "react-native";

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
