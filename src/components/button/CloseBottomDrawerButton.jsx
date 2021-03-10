import React from "react";
import { Fab } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./Styles";
import { closeDrawer } from "../../actions/DrawerActions";
import { setSelectedMarker } from "../../actions/MapActions";
import { useDispatch } from "react-redux";

const CloseBottomDrawerButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const HandleCloseBottomDrawer = () => {
    dispatch(setSelectedMarker(""));
    dispatch(closeDrawer());
  };

  return (
    <div className={classes.CloseMobileDrawer}>
      <Fab
        size="small"
        color="default"
        style={{ height: 35, width: 35, margin: 10, marginRight: 16 }}
        onClick={HandleCloseBottomDrawer}
      >
        <CloseIcon />
      </Fab>
    </div>
  );
};

export default CloseBottomDrawerButton;
