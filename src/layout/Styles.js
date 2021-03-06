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
  dialogTitle: {
    fontFamily: "'roboto'",
    marginLeft: "15px",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "25px",
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
  dialogButton: {
    marginLeft: "10px",
    marginRight: "10px",
  },
  title:{
    textAlign: "center",
    marginTop: "10px",
    fontSize: "23px"
  }
}));
