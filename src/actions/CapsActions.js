import * as actions from "./Types";

export const setSelectedCaps = (selectedCaps) => ({
  type: actions.SET_SELECTED_CAPS,
  payload: selectedCaps,
});

export const setCaps = (caps) => ({
    type: actions.SET_CAPS,
    payload: caps,
});