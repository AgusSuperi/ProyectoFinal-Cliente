import React, { useState } from "react";
import { ClickAwayListener, Drawer } from "@material-ui/core";
import { useStyles } from "./Styles";
import FilterPanel from "../filters/FilterPanel";
import SelectedCapsInformation from "./SelectedCapsInformation";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import { useDispatch, useSelector } from "react-redux";
import ExpandMobileDrawerButton from "../button/ExpandMobileDrawerButton";
import { closeDrawer } from "../../actions/DrawerActions";
import { setSelectedMarker } from "../../actions/MapActions";

const DrawerPanel = () => {
  const classes = useStyles();
  const drawerOpen = useSelector((state) => state.drawer.drawerOpen);
  const filterPanelOpen = useSelector((state) => state.drawer.filterPanelOpen);
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const [drawerIsExpanded, setDrawerIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const HandleCloseBottomDrawer = () => {
    dispatch(setSelectedMarker(""));
    dispatch(closeDrawer());
  };

  if (windowWidth > ScreenSizes.Small) {
    return (
      <Drawer
        className={classes.leftDrawer}
        anchor="left"
        variant="persistent"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <FilterPanel />
        <SelectedCapsInformation />
      </Drawer>
    );
  } else if (selectedMarker || filterPanelOpen) {
    return (
      <ClickAwayListener onClickAway={HandleCloseBottomDrawer}>
        <div className={drawerIsExpanded ? classes.bottomDrawerExpanded : classes.bottomDrawerCollapsed}>
          <ExpandMobileDrawerButton
            setDrawerIsExpanded={setDrawerIsExpanded}
            drawerIsExpanded={drawerIsExpanded}
          />
          <FilterPanel />
          <SelectedCapsInformation />
        </div>
      </ClickAwayListener>
    );
  } else {
    return null;
  }
};

export default DrawerPanel;
