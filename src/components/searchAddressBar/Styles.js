import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  searchLargeScreen: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginLeft: 0,
    width: "400px",
    boxShadow: "2px 2px #CECECE",
    alignContent: "center",
  },
  searchSmallScreen: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginLeft: 0,
    width: "280px",
    boxShadow: "2px 2px #CECECE",
    alignContent: "center",
  },
  searchAddressPanel: {
    top: "10px",
    left: "6px",
    position: "absolute",
    zIndex: theme.zIndex.drawer + 1,
    opacity: 0.95
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInputLargeScreen: {
    paddingLeft: "25px",
    width: "270px",
    height: "4.5ch",
  },
  inputInputSmallScreen: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "150px",
    height: "4.5ch",
  },
  headerDivider: {
    borderLeft: "0.7px solid #E6E6E6",
    borderRight: "0.7px solid #E6E6E6",
    height: "4ch",
    position: "absolute",
    top: "10px",
    right: "50px",
    marginRight: "10px",
  },
}));
