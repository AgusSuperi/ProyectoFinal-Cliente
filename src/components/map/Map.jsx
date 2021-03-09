import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import {
  capsBusStopIcon,
  capsIcon,
  capsIconBigger,
  userBusStopIcon,
  userLocationIcon,
  useStyles,
} from "./Styles";
import BusMarkerPopup from "../markerPopUp/BusMarkerPopup";
import DrawerButton from "../button/DrawerButton";
import MenuButton from "../button/MenuButton";
import SearchAddressBar from "../searchAddressBar/SearchAddressBar";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMarker } from "../../actions/MapActions";
import { setDrawerOpen, setFilterPanelOpen } from "../../actions/DrawerActions";

export default function CityMap() {
  const classes = useStyles();
  const markers = useSelector((state) => state.map.markers);
  const mapCenter = useSelector((state) => state.map.mapCenter);
  const capsBusStopMarkers = useSelector((state) => state.map.capsBusStopMarkers);
  const userBusStopMarkers = useSelector((state) => state.map.userBusStopMarkers);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const userMarker = useSelector((state) => state.map.userMarker);
  const dispatch = useDispatch();

  const handleSelectMarker = (capsMarker) => {
    var actual = markers.find((x) => x.selected);
    if (actual) {
      actual.selected = false;
    }
    capsMarker.selected = true;
    dispatch(setDrawerOpen(true));
    dispatch(setFilterPanelOpen(false));
    dispatch(setSelectedMarker(capsMarker));
  };

  return (
    <div className={classes.root}>
      <Map animate={true} center={mapCenter} zoom={13} className={classes.map} zoomControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {(markers || []).map((capsMarker) => (
          <Marker
            key={capsMarker.id}
            position={[capsMarker.latitude, capsMarker.longitude]}
            icon={selectedMarker && capsMarker.selected ? capsIconBigger : capsIcon}
            onClick={() => handleSelectMarker(capsMarker)}
          />
        ))}

        {userMarker ? <Marker position={[userMarker.lat, userMarker.lng]} icon={userLocationIcon} /> : null}

        {(capsBusStopMarkers || []).map((capsBusStopMarker, value) => (
          <Marker key={value} position={capsBusStopMarker.Coords} icon={capsBusStopIcon}>
            <BusMarkerPopup busMarker={capsBusStopMarker} />
          </Marker>
        ))}

        {(userBusStopMarkers || []).map((userBusStopMarker, value) => (
          <Marker key={value} position={userBusStopMarker.Coords} icon={userBusStopIcon}>
            <BusMarkerPopup busMarker={userBusStopMarker} />
          </Marker>
        ))}
      </Map>
      <DrawerButton />
      <MenuButton />
      <SearchAddressBar />
    </div>
  );
}
