import { Action, AsyncAction } from "overmind";
import { Alert } from "react-native";

export const getStarships: AsyncAction = async ({ effects, state }) => {
  try {
    await effects.gql.queries.getStarshipsQuery().then((r) => {
      state.starShips = r.allStarships.starships;
    });
  } catch (e) {
    Alert.alert(e.toString());
  }
};
