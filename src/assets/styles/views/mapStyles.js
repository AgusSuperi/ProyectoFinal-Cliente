import { Icon } from "leaflet";
import userLocationMarker from "../../img/userLocationMarker.png";
import hospitalMarker from "../../img/hospitalMarker.png";
import capsBusStopMarker from "../../img/capsBusStopMarker.png";
import userBusStopMarker from "../../img/userBusStopMarker.png";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  map: {
    height: "100vh",
    width: "100%",
    zIndex: 1,
  },
  openOrCloseDrawerButton: {
    top: "100px",
    left: 0,
    position: "absolute",
    zIndex: 2,
  },
  searchAddressPanel: {
    top: "10px",
    left: "12px",
    position: "absolute",
    zIndex: theme.zIndex.drawer + 1,
  },
  searchCapsMenuButton: {
    top: "17px",
    right: "15px",
    position: "absolute",
    zIndex: 2,
  },
}));

export const capsIcon = new Icon({
  iconUrl: hospitalMarker,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export const capsIconBigger = new Icon({
  iconUrl: hospitalMarker,
  iconSize: [50, 50],
  iconAnchor: [12, 50],
  popupAnchor: [1, -34],
});

export const capsBusStopIcon = new Icon({
  iconUrl: capsBusStopMarker,
  iconSize: [60, 60],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export const userBusStopIcon = new Icon({
  iconUrl: userBusStopMarker,
  iconSize: [35, 50],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export const userLocationIcon = new Icon({
  iconUrl: userLocationMarker,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
