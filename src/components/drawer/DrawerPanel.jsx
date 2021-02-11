import React, { useState } from "react";
import { ClickAwayListener, Drawer } from "@material-ui/core";
import { useStyles } from "./Styles";
import { useCapsContext } from "../../context/CapsContext";
import FilterPanel from "../filters/FilterPanel";
import SelectedCapsInformation from "./SelectedCapsInformation";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import ExpandMobileDrawer from "../button/ExpandMobileDrawer";

const DrawerPanel = () => {
  const classes = useStyles();
  const { CloseBottomDrawer, drawerOpen, filterPanelOpen, selectedCaps, windowWidth } = useCapsContext();
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
        <FilterPanel />
        <SelectedCapsInformation />
      </Drawer>
    );
  } else if (selectedCaps || filterPanelOpen) {
    return (
      <ClickAwayListener onClickAway={CloseBottomDrawer}>
        <div className={drawerIsExpanded ? classes.bottomDrawerExpanded : classes.bottomDrawerCollapsed}>
          <ExpandMobileDrawer setDrawerIsExpanded={setDrawerIsExpanded} drawerIsExpanded={drawerIsExpanded} />
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
