import React from "react";
import { Fab } from "@material-ui/core";
import clsx from "clsx";
import { useCapsContext } from "../../context/CapsContext";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "../../assets/styles/components/buttonStyles";

const OpenOrCloseDrawerButton = () => {
  const classes = useStyles();
  const { drawerOpen, setDrawerOpen } = useCapsContext();

  return (
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
  );
};

export default OpenOrCloseDrawerButton;
