import React from "react";
import { Drawer } from "@material-ui/core";
import { useStyles } from "../../assets/styles/components/drawerStyles";
import { useCapsContext } from "../../context/CapsContext";
import FilterPanel from "../filters/FilterPanel";
import SelectedCapsInformation from "./SelectedCapsInformation";

const DrawerPanel = () => {
  const classes = useStyles();
  const { drawerOpen, windowWidth } = useCapsContext();

  return (
    <Drawer
      className={classes.drawer}
      anchor={windowWidth > 599 ? "left" : "bottom"}
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
};

export default DrawerPanel;
