import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../components/drawer/Styles";

export const useStyles = makeStyles((theme) => ({
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
  dialogContent: {
    textAlign: "center",
  },
  dialogText: {
    fontFamily: "roboto",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "17px",
  },
  marker: {
    width: "30px",
    verticalAlign: "middle",
  },
  buttonContainer: {
    textAlign: "center",
    margin: "10px",
  },
}));

export const dialogTitle = {
  textAlign: "center",
  fontSize: "23px",
  marginTop: "10px",
};

export const dialogButton = {
  marginRight: "10px",
};
