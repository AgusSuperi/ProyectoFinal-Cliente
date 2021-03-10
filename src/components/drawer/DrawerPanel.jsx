import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import { useStyles } from "./Styles";
import FilterPanel from "../filters/FilterPanel";
import SelectedCapsInformation from "./SelectedCapsInformation";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import { useSelector } from "react-redux";
import ExpandMobileDrawerButton from "../button/ExpandMobileDrawerButton";
import CloseBottomDrawerButton from "../button/CloseBottomDrawerButton";
import "./Styles.css";

const DrawerPanel = () => {
  const classes = useStyles();
  const drawerOpen = useSelector((state) => state.drawer.drawerOpen);
  const filterPanelOpen = useSelector((state) => state.drawer.filterPanelOpen);
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const [drawerIsExpanded, setDrawerIsExpanded] = useState(false);

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
        {filterPanelOpen && <FilterPanel />}
        <SelectedCapsInformation />
      </Drawer>
    );
  } else if (selectedMarker || filterPanelOpen) {
    return (
      <div className={drawerIsExpanded ? "bottomDrawerExpanded" : "bottomDrawerCollapsed"}>
        <ExpandMobileDrawerButton
          setDrawerIsExpanded={setDrawerIsExpanded}
          drawerIsExpanded={drawerIsExpanded}
        />
        <CloseBottomDrawerButton />
        <FilterPanel />
        <SelectedCapsInformation />
      </div>
    );
  } else {
    return null;
  }
};

export default DrawerPanel;
