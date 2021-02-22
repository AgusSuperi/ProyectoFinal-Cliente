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
  dialogContent:{
    textAlign: "center"
  },
  dialogTitle:{
    fontFamily: "'roboto'",
    marginLeft: "15px",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "25px",
    textAlign: "center",
  },
  dialogText:{
    fontFamily: 'roboto',
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "19px",
  },
  marker:{
    width: "30px",
    verticalAlign: "middle"
  },
  buttonContainer:{
    textAlign: "center",
    margin: "20px"
  },
  button:{
    margin: "15px"
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  welcomeImageContainer:{
    textAlign: "center",
    margin: "15px"
  },
  welcomeImage:{
    width: "100px",
  }
}));
