import React, { useState } from "react";
import { useStyles } from "../../assets/styles/components/drawerStyles";
import { Typography } from "@material-ui/core";
import { useCapsContext } from "../../context/CapsContext";
import { useLocationContext } from "../../context/LocationContext";
import DrawerBottomNavigation from "./DrawerBottomNavigation";
import TabPanels from "../tabPanel/TabPanels";
import { ScreenSizes } from "../../utils/screenSizeValues/ScreenSizeValues";
import { GetDistanceFromLatLonInM } from "../../utils/distanceCalculator/DistanceCalculator";

const SelectedCapsInformation = () => {
  const classes = useStyles();
  const { selectedCaps, windowWidth } = useCapsContext();
  const { userMarker } = useLocationContext();
  const [selectedTab, setSelectedTab] = useState(0);

  const GetDistanceBetweenSelectedCapsAndUserLocation = () => {
    var distance = GetDistanceFromLatLonInM(
      userMarker.lat,
      userMarker.lng,
      selectedCaps.latitud,
      selectedCaps.longitud
    );
    var distanceRounded = Math.round(distance);
    return (
      <Typography variant="subtitle1" className={classes.distanceLabel}>
        Usted se encuentra a
        {distanceRounded >= 1000
          ? " " + (distance / 1000).toFixed(1) + " km"
          : " " + distanceRounded + " metros"}
      </Typography>
    );
  };
  return (
    <>
      {selectedCaps ? (
        <div>
          <div
            className={
              windowWidth > ScreenSizes.Small
                ? classes.imageContainerLargeScreen
                : classes.imageContainerSmallScreen
            }
          >
            <img
              src={
                "http://localhost:5000/api/imagenes/" + selectedCaps.imagenURL
              }
              alt="Foto del CAPS"
              className={classes.image}
            />
          </div>
          <div className={classes.title}>
            <Typography variant="h5">{selectedCaps.nombre}</Typography>
            {userMarker
              ? GetDistanceBetweenSelectedCapsAndUserLocation()
              : undefined}
          </div>
          <hr />
          <DrawerBottomNavigation
            value={selectedTab}
            setValue={setSelectedTab}
          />
          <div className={classes.tabPanels}>
            <TabPanels value={selectedTab} />
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default SelectedCapsInformation;
