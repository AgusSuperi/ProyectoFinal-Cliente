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
      case actions.CLOSE_DRAWER:
      return {
        ...state,
        filterPanelOpen: false,
        drawerOpen: false
      };
    default:
      return state;
  }
};

export default DrawerReducer;