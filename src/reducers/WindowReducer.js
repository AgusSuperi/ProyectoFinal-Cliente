import * as actions from "../actions/Types";

const initialState = {
  windowWidth: window.innerWidth,
};

export const WindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: action.payload,
      };
    default:
      return state;
  }
};

export default WindowReducer;