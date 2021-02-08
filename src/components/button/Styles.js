import React from 'react';
import { makeStyles, Menu, MenuItem, Tooltip, withStyles } from "@material-ui/core";
import { drawerWidth } from "../drawer/Styles";

export const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    marginBottom: theme.spacing(1),
    color: "white",
    backgroundColor: "#f56f3a",
    "&:hover": {
      backgroundColor: "#DB6232",
    },
  },
  shiftButton: {
    flexGrow: 1,
    marginLeft: drawerWidth,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  browserLocationButton: {
    position: "absolute",
    display: "inline-block",
    right: 10,
    top: 6,
  },
  margin: {
    margin: theme.spacing(1),
  },
  MobileDrawerButton: {
    position: "absolute",
    top: 0,
    right: 0
  },
  DrawerButton: {
    top: "100px",
    left: "5px",
    position: "absolute",
    zIndex: 2,
  },
  MenuButton: {
    top: "17px",
    right: "15px",
    position: "absolute",
    zIndex: 2,
    textAlign: "right"
  },
  icon: {
    color: "white",
  },
  menuButtonExtendedIcon: {
    marginLeft: theme.spacing(1),
  },
  menuButtonContainer:{
    backgroundColor: "black",
    marginTop: "10px"
  },
  listItemText:{
    color: "white"
  }
}));

export const ButtonTooltip = withStyles({
  tooltip: {
    fontSize: "15px",
  },
})(Tooltip);

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    backgroundColor: "#252932",
    color: "white",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
