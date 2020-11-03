import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "../components/drawerStyles";

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
  CloseBottomDrawerButtonContainer: {
    position: "absolute",
    top: 0,
    right: 0
  }
}));
