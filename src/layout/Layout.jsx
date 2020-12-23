import React from "react";
import { useStyles } from "./Styles";
import DrawerPanel from "../components/drawer/DrawerPanel";
import Map from "../components/map/Map";
import { useCapsContext } from "../context/CapsContext";
import ScreenSizes from "../utils/screenSizeValues/ScreenSizeValues";

export default function Layout() {
  const classes = useStyles();
  const { windowWidth } = useCapsContext();

  return (
    <div className={classes.root}>
      <DrawerPanel />
      <main
        className={
          windowWidth > ScreenSizes.Small ? classes.mapContentDrawerLeft : classes.mapContentDrawerBottom
        }
      >
        <Map />
      </main>
    </div>
  );
}
