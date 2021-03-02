import React, { useState } from "react";
import { useStyles } from "./Styles";
import { Typography } from "@material-ui/core";
import DrawerBottomNavigation from "./DrawerBottomNavigation";
import TabPanels from "../tabPanel/TabPanels";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import { useSelector } from "react-redux";
import GetDistanceFromLatLonInM from "../../functions/GetDistanceFromLatLonInM";

const SelectedCapsInformation = () => {
  const classes = useStyles();
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const userMarker = useSelector((state) => state.map.userMarker);
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);

  const GetDistanceBetweenSelectedCapsAndUserLocation = () => {
    var distance = GetDistanceFromLatLonInM(
      userMarker.lat,
      userMarker.lng,
      selectedMarker.latitude,
      selectedMarker.longitude
    );
    var distanceRounded = Math.round(distance);
    return (
      <Typography variant="subtitle1" className={classes.distanceLabel}>
        Usted se encuentra a aproximadamente
        {distanceRounded >= 1000
          ? " " + (distance / 1000).toFixed(1) + " km"
          : " " + distanceRounded + " metros"}
      </Typography>
    );
  };
  return (
    <>
      {selectedMarker ? (
        <div className={classes.capsInformationContainer}>
          <div
            className={
              windowWidth > ScreenSizes.Small
                ? classes.imageContainerLargeScreen
                : classes.imageContainerSmallScreen
            }
          >
            <img
              src={"http://localhost:5000/api/images/" + selectedMarker.imageURL}
              alt="Foto del CAPS"
              className={classes.image}
            />
          </div>
          <div className={classes.title}>
            <Typography variant="h5">{selectedMarker.name}</Typography>
            {userMarker ? GetDistanceBetweenSelectedCapsAndUserLocation() : undefined}
          </div>
          <hr />
          <DrawerBottomNavigation value={selectedTab} setValue={setSelectedTab} />
          <div className={classes.tabPanels}>
            <TabPanels value={selectedTab} />
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default SelectedCapsInformation;
