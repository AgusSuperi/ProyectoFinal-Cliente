import React from "react";
import { Drawer } from "@material-ui/core";
import { useStyles } from "./Styles";
import { useCapsContext } from "../../context/CapsContext";
import FilterPanel from "../filters/FilterPanel";
import SelectedCapsInformation from "./SelectedCapsInformation";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import DrawerButtonMobile from "../button/DrawerButtonMobile";

const DrawerPanel = () => {
  const classes = useStyles();
  const { drawerOpen, filterPanelOpen, selectedCaps, windowWidth } = useCapsContext();

  return (
    <>
      {windowWidth > ScreenSizes.Small ? (
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
      ) : (
        <>
          {selectedCaps || filterPanelOpen ? (
            <div className={classes.bottomDrawer}>
              <DrawerButtonMobile />
              <FilterPanel />
              <SelectedCapsInformation />
            </div>
          ) : undefined}
        </>
      )}
    </>
  );
};

export default DrawerPanel;
