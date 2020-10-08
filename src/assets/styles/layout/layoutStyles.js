import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../components/drawerStyles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  mapContent: {
    flexGrow: 1,
    marginLeft: -drawerWidth,
  },
}));
