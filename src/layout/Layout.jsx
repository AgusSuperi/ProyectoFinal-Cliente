import React, { useState } from "react";
import { useStyles } from "./Styles";
import DrawerPanel from "../components/drawer/DrawerPanel";
import Map from "../components/map/Map";
import { useCapsContext } from "../context/CapsContext";
import ScreenSizes from "../utils/screenSizeValues/ScreenSizeValues";
import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import TourConfig from "./TourConfig";
import "../Styles.css";

export default function Layout() {
  const classes = useStyles();
  const { windowWidth } = useCapsContext();
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  const accentColor = "#5cb7b7";
  const [isTourOpen, setTourIsOpen] = useState(true);

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
      <Tour
        onRequestClose={() => setTourIsOpen(false)}
        steps={TourConfig}
        isOpen={isTourOpen}
        className="helper"
        rounded={5}
        accentColor={accentColor}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
      />
    </div>
  );
}
