import React from "react";
import { Fab } from "@material-ui/core";
import clsx from "clsx";
import { useCapsContext } from "../../context/CapsContext";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./Styles";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";

const DrawerButton = () => {
  const classes = useStyles();
  const { drawerOpen, filterPanelOpen, selectedCaps, setDrawerOpen, windowWidth } = useCapsContext();

  if ((selectedCaps || filterPanelOpen) && windowWidth > ScreenSizes.Small) {
    return (
      <div className={classes.DrawerButton}>
        <Fab
          color="primary"
          size="small"
          onClick={() => setDrawerOpen(!drawerOpen)}
          className={clsx({
            [classes.shiftButton]: drawerOpen,
          })}
        >
          {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Fab>
      </div>
    );
  }
  return null;
};

export default DrawerButton;
