import { makeStyles } from "@material-ui/core";

export const drawerWidth = 420;

export const useStyles = makeStyles((theme) => ({
  leftDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  capsInformationContainer: {
    overflow: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  imageContainerLargeScreen: {
    width: "100%",
    height: "270px",
  },
  imageContainerSmallScreen: {
    width: "100%",
    height: "180px",
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
  distanceLabel: {
    color: "#969696",
  },
}));
