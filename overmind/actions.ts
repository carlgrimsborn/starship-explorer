import { Action, AsyncAction } from "overmind";
import { Alert } from "react-native";
import { Film, Pilot, StarShip } from "./state";

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

type SetSelectedPilots = {
  pilots: Pilot[];
};

export const setSelectedPilots: Action<SetSelectedPilots> = (
  { state },
  { pilots }
) => {
  state.selectedPilots = {
    ...pilots,
  };
};

type SetSelectedPilot = {
  pilot: Pilot;
};

export const setSelectedPilot: Action<SetSelectedPilot> = (
  { state },
  { pilot }
) => {
  state.selectedPilot = {
    ...pilot,
  };
};

type SetSelectedFilm = {
  films: Film[];
};

export const setSelectedFilm: Action<SetSelectedFilm> = (
  { state },
  { films }
) => {
  state.selectedFilms = {
    ...films,
  };
};
