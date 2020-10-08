import React from "react";
import { Drawer } from "@material-ui/core";
import { useStyles } from "../../assets/styles/components/drawerStyles";
import { useCapsContext } from "../../context/CapsContext";
import DrawerContainer from "./DrawerContainer";

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
      <DrawerContainer />
    </Drawer>
  );
};

export default DrawerPanel;
