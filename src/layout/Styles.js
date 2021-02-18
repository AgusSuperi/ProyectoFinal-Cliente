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
  dialogContent:{
    textAlign: "justify"
  },
  dialogtitle:{
    textAlign: "center"
  },
  dialogText:{
    textAlign: "justify",
    verticalAlign: "middle",
    fontSize: "19px",
  },
  marker:{
    width: "30px",
    verticalAlign: "middle"
  }
}));
