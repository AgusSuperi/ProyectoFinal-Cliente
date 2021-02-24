import React, { useState } from "react";
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
import { useBusContext } from "../../context/BusContext";
import { useCapsContext } from "../../context/CapsContext";
import { useLocationContext } from "../../context/LocationContext";
import DrawerButton from "../button/DrawerButton";
import MenuButton from "../button/MenuButton";
import SearchAddressBar from "../searchAddressBar/SearchAddressBar";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCaps } from "../../actions/CapsActions";

export default function CityMap() {
  const classes = useStyles();
  const caps = useSelector((state) => state.caps.caps);
  const { zoom, mapCenter, setDrawerOpen, setFilterPanelOpen } = useCapsContext();
  const { capsBusStopMarkers, userBusStopMarkers } = useBusContext();
  const { userMarker } = useLocationContext();
  const [actualMarkerSelected, setActualMarkerSelected] = useState([]);
  const dispatch = useDispatch();

  const handleSelectMarker = (capsMarker) => {
    changeActualMarkerSelected(capsMarker);
    setDrawerOpen(true);
    setFilterPanelOpen(false);
    dispatch(setSelectedCaps(capsMarker));
  };

  const changeActualMarkerSelected = (marker) => {
    actualMarkerSelected.selected = false;
    marker.selected = true;
    setActualMarkerSelected(marker);
  };

  return (
    <div className={classes.root}>
      <Map animate={true} center={mapCenter} zoom={zoom} className={classes.map} zoomControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {(caps || []).map((capsMarker) => (
          <Marker
            key={capsMarker.id}
            position={[capsMarker.latitude, capsMarker.longitude]}
            icon={capsMarker.selected ? capsIconBigger : capsIcon}
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
