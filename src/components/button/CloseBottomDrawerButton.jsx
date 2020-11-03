import React from "react";
import { Fab } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "../../assets/styles/components/buttonStyles";
import { useCapsContext } from "../../context/CapsContext";

const CloseBottomDrawerButton = () => {
  const classes = useStyles();
  const { CloseBottomDrawer } = useCapsContext();

  return (
    <div className={classes.CloseBottomDrawerButtonContainer}>
      <Fab size="small" color="default" className={classes.margin} onClick={CloseBottomDrawer}>
        <CloseIcon />
      </Fab>
    </div>
  );
};

export default CloseBottomDrawerButton;
