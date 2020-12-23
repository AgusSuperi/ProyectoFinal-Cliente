import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../components/drawer/Styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  mapContentDrawerLeft: {
    flexGrow: 1,
    marginLeft: -drawerWidth,
  },
  mapContentDrawerBottom: {
    flexGrow: 1,
  },
}));
