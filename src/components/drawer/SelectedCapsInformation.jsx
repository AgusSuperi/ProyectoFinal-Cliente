import React, { useState } from "react";
import { useStyles } from "../../assets/styles/components/drawerStyles";
import { Typography } from "@material-ui/core";
import { useCapsContext } from "../../context/CapsContext";
import DrawerBottomNavigation from "./DrawerBottomNavigation";
import TabPanels from "../tabPanel/TabPanels";
import { ScreenSizes } from "../../utils/screenSizeValues/ScreenSizeValues";

const SelectedCapsInformation = () => {
  const classes = useStyles();
  const { selectedCaps, windowWidth } = useCapsContext();
  const [selectedTab, setSelectedTab] = useState(0);

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
              src={"http://localhost:5000/api/imagenes/" + selectedCaps.imagenURL}
              alt="Foto del CAPS"
              className={classes.image}
            />
          </div>
          <div className={classes.title}>
            <Typography variant="h5">{selectedCaps.nombre}</Typography>
            <Typography variant="subtitle1">{selectedCaps.barrio}</Typography>
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
