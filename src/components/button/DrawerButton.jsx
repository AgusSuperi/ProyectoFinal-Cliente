import React from "react";
import { Fab } from "@material-ui/core";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./Styles";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import { setDrawerOpen } from "../../actions/DrawerActions";
import { useDispatch, useSelector } from "react-redux";

const DrawerButton = () => {
  const classes = useStyles();
  const drawerOpen = useSelector((state) => state.drawer.drawerOpen);
  const filterPanelOpen = useSelector((state) => state.drawer.filterPanelOpen);
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const dispatch = useDispatch();

  if ((selectedMarker || filterPanelOpen) && windowWidth > ScreenSizes.Small) {
    return (
      <div className={classes.DrawerButton}>
        <Fab
          color="primary"
          size="small"
          onClick={() => dispatch(setDrawerOpen(!drawerOpen))}
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
