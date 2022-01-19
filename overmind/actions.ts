import { Action, AsyncAction } from "overmind";
import { Alert } from "react-native";
import { StarShip } from "./state";

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

type SetSelectedStarShipType = {
  starShip: StarShip;
};

export const setSelectedStarShip: Action<SetSelectedStarShipType> = (
  { state },
  { starShip }
) => {
  state.selectedStarShip = {
    ...starShip,
  };
};
