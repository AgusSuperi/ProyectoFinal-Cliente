import * as actions from "../actions/ActionTypes";

const initialState = {
  caps: [],
  selectedCaps: ""
};

export const CapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SELECTED_CAPS:
      return {
        ...state,
        selectedCaps: action.payload,
      };
      case actions.SET_CAPS:
      return {
        ...state,
        caps: action.payload,
      };
    default:
      return state;
  }
};

export default CapsReducer;
