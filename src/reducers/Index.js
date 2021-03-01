import { combineReducers } from "redux";
import CapsReducer from "./CapsReducer";
import DrawerReducer from "./DrawerReducer";
import MapReducer from "./MapReducer";
import WindowReducer from "./WindowReducer";

export default combineReducers({
  caps: CapsReducer,
  map: MapReducer,
  drawer: DrawerReducer,
  window: WindowReducer
});


