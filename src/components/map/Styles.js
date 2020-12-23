import { Icon } from "leaflet";
import userLocationMarker from "../../assets/img/userLocationMarker.png";
import hospitalMarker from "../../assets/img/hospitalMarker.png";
import capsBusStopMarker from "../../assets/img/capsBusStopMarker.png";
import userBusStopMarker from "../../assets/img/userBusStopMarker.png";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  map: {
    height: "100vh",
    width: "100%",
    zIndex: 1,
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
