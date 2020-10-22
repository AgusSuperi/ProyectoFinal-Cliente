import { makeStyles } from "@material-ui/core";

export const drawerWidth = 420;

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerContainer: {
    overflow: "auto",
  },
  imageContainer: {
    width: "100%",
    height: "270px",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    padding: "15px",
  },
  distanceContainer: {
    padding: "15px",
  },
  specialitiesTitle: {
    marginBottom: "10px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  filterPanel: {
    margin: 15,
  },
  tabPanels: {
    textAlign: "center",
  },
}));
