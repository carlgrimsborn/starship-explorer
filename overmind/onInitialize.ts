import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = ({ effects }) => {
  effects.gql.initialize({
    endpoint: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  });
};
