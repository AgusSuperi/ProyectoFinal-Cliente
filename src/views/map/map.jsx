import React, { useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import {
  capsBusStopIcon,
  capsIcon,
  capsIconBigger,
  userBusStopIcon,
  userLocationIcon,
  useStyles,
} from "../../assets/styles/views/mapStyles";
import BusMarkerPopup from "../../components/map/BusMarkerPopup";
import { useBusContext } from "../../context/BusContext";
import { useCapsContext } from "../../context/CapsContext";
import { useLocationContext } from "../../context/LocationContext";
import ButtonsPanel from "../../components/button/ButtonsPanel";

export default function Mapa() {
  const classes = useStyles();
  const {
    marcadores,
    zoom,
    mapCenter,
    setDrawerOpen,
    setFilterPanelOpen,
    setSelectedCaps,
  } = useCapsContext();
  const { capsBusStopMarkers, userBusStopMarkers } = useBusContext();
  const { marcadorUsuario } = useLocationContext();
  const [actualMarkerSelected, setActualMarkerSelected] = useState([]);

  const handleSelectMarker = (capsMarker) => {
    changeActualMarkerSelected(capsMarker);
    setSelectedCaps(capsMarker);
    setDrawerOpen(true);
    setFilterPanelOpen(false);
  };

  const changeActualMarkerSelected = (marker) => {
    actualMarkerSelected.selected = false;
    marker.selected = true;
    setActualMarkerSelected(marker);
  };

  return (
    <div className={classes.root}>
      <Map
        animate={true}
        center={mapCenter}
        zoom={zoom}
        className={classes.map}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {(marcadores || []).map((capsMarker) => (
          <Marker
            key={capsMarker.id}
            position={[capsMarker.latitud, capsMarker.longitud]}
            icon={capsMarker.selected ? capsIconBigger : capsIcon}
            onClick={() => handleSelectMarker(capsMarker)}
          />
        ))}

        {marcadorUsuario ? (
          <Marker
            position={[marcadorUsuario.latitud, marcadorUsuario.longitud]}
            icon={userLocationIcon}
          />
        ) : null}

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
      <ButtonsPanel />
    </div>
  );
}
