import { combineReducers } from "redux";
import DrawerReducer from "./DrawerReducer";
import MapReducer from "./MapReducer";
import WindowReducer from "./WindowReducer";

export default combineReducers({
  map: MapReducer,
  drawer: DrawerReducer,
  window: WindowReducer
});


