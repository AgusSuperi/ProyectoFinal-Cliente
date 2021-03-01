import * as actions from "../actions/Types";

const initialState = {
  drawerOpen: false,
  filterPanelOpen: false,
};

export const DrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DRAWER_OPEN:
      return {
        ...state,
        drawerOpen: action.payload,
      };
      case actions.SET_FILTER_PANEL_OPEN:
      return {
        ...state,
        filterPanelOpen: action.payload,
      };
    default:
      return state;
  }
};

export default DrawerReducer;