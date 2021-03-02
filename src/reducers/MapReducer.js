import * as actions from "../actions/Types";

const initialState = {
  markers: [],
  selectedMarker: "",
  userMarker: "",
  capsBusStopMarkers: [],
  userBusStopMarkers: [],
  mapCenter: [-38.725151, -62.254951],
};

export const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MARKERS:
      return {
        ...state,
        markers: action.payload,
      };
      case actions.SET_SELECTED_MARKER:
      return {
        ...state,
        selectedMarker: action.payload,
      };
      case actions.SET_USER_MARKER:
      return {
        ...state,
        userMarker: action.payload,
      };
      case actions.SET_CAPS_BUS_STOP_MARKERS:
      return {
        ...state,
        capsBusStopMarkers: action.payload,
      };
      case actions.SET_USER_BUS_STOP_MARKERS:
      return {
        ...state,
        userBusStopMarkers: action.payload,
      };
      case actions.SET_MAP_CENTER:
      return {
        ...state,
        mapCenter: action.payload,
      };
      case actions.RESET_MARKERS:
      return {
        ...state,
        capsBusStopMarkers: [],
        userBusStopMarkers: [],
        markers: action.payload,
      };
    default:
      return state;
  }
};

export default MapReducer;