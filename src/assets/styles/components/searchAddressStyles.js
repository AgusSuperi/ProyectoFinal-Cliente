import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginLeft: 0,
    width: "400px",
    boxShadow: "2px 2px #CECECE",
    alignContent: "center",
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
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "270px",
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
