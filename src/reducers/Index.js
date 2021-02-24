import { combineReducers } from "redux";
import CapsReducer from "./CapsReducer";

export default combineReducers({
  caps: CapsReducer,
});
