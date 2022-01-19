import { IConfig, IContext, OnInitialize } from "overmind";
import { createActionsHook, createStateHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
import { gql } from "./effects/gql";
import { onInitialize } from "./onInitialize";

export const config = {
  state,
  actions,
  effects: {
    gql,
  },
  onInitialize,
};

export type Context = IContext<typeof config>;

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermindState = createStateHook<typeof config>();
export const useOvermindActions = createActionsHook<typeof config>();
