import * as actions from "./Types";

export const setWindowWidth = (windowWidth) => ({
  type: actions.SET_WINDOW_WIDTH,
  payload: windowWidth,
});