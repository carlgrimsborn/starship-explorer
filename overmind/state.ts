export type Film = {
  title: string;
  director: string;
};

export type Species = {
  name: string;
  language: string;
};

export type HomeWorld = {
  name: string;
};

export type Pilot = {
  name: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: number;
  mass: number;
  skinColor: string;
  homeworld: HomeWorld;
  species: Species;
};

export type StarShip = {
  name: string;
  model: string;
  crew: string;
  starshipClass: string;
  manufacturers: string[];
  costInCredits: number;
  length: number;
  passengers: string;
  maxAtmospheringSpeed: number;
  hyperdriveRating: number;
  MGLT: number;
  cargoCapacity: number;
  consumables: string;
  pilotConnection: {
    pilots: Pilot[];
  };
  filmConnection: {
    films: Film[];
  };
};

type State = {
  starShips: StarShip[] | null;
  selectedStarShipIndex: number | null;
  selectedPilotIndex: number | null;
  loading: boolean;
  theme: "jedi" | "sith";
};

export const state: State = {
  starShips: null,
  selectedStarShipIndex: null,
  selectedPilotIndex: null,
  loading: false,
  theme: "jedi",
};
