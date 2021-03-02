import * as actions from "./Types";

export const setMarkers = (markers) => ({
  type: actions.SET_MARKERS,
  payload: markers,
});

export const setSelectedMarker = (selectedMarker) => ({
    type: actions.SET_SELECTED_MARKER,
    payload: selectedMarker,
});

export const setUserMarker = (userMarker) => ({
    type: actions.SET_USER_MARKER,
    payload: userMarker,
});

export const setCapsBusStopMarkers = (capsBusStopMarkers) => ({
    type: actions.SET_CAPS_BUS_STOP_MARKERS,
    payload: capsBusStopMarkers,
});

export const setUserBusStopMarkers = (userBusStopMarkers) => ({
    type: actions.SET_USER_BUS_STOP_MARKERS,
    payload: userBusStopMarkers,
});

export const setMapCenter = (mapCenter) => ({
    type: actions.SET_MAP_CENTER,
    payload: mapCenter,
});

export const resetMarkers = (markers) => ({
    type: actions.RESET_MARKERS,
    payload: markers,
});