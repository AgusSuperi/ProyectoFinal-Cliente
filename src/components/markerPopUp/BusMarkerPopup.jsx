import React from "react";
import { Popup } from "react-leaflet";
import { Typography } from "@material-ui/core";

const BusMarkerPopup = ({ busMarker }) => {
  return (
    <Popup>
      <div style={{ textAlign: "center" }}>
        <Typography variant="subtitle1">{busMarker.Direction === "i" ? "Ida" : "Vuelta"}</Typography>
      </div>
    </Popup>
  );
};

export default BusMarkerPopup;
