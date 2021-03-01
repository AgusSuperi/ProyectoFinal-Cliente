import React from "react";
import { Fab } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandLess";
import ExpandLessIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./Styles";

const ExpandMobileDrawerButton = ({ drawerIsExpanded, setDrawerIsExpanded }) => {
  const classes = useStyles();

  return (
    <div className={classes.MobileDrawerButton}>
      <Fab
        size="small"
        color="primary"
        style={{ height: 35, width: 35, margin: 10, marginRight: 16 }}
        onClick={() => setDrawerIsExpanded(!drawerIsExpanded)}
      >
        {drawerIsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Fab>
    </div>
  );
};

export default ExpandMobileDrawerButton;
