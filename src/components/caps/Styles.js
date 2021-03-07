import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  infoContainer: {
    width: "100%",
    marginTop: "25px",
  },
  firstStep: {
    color: "gray",
  },
  secondStep: {
    marginTop: "30px",
    color: "gray",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#D8D8D8",
    },
  },
  list: {
    marginTop: "20px",
  },
  root: {
    marginTop: "30px",
  },
  title: {
    marginBottom: "25px",
  },
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
    marginTop: "30px",
    color: "gray",
  },
  linkIcon: {
    width: "20px",
  },
  arrowIcon: {
    width: "15px",
  },
  emergencyRootDesktop: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: "10px",
    left: 0,
  },
  emergencyRootMobile: {
    alignItems: "center",
    width: "100%",
    marginTop: "50px",
  },
  emergencyContainer: {
    width: "auto",
  },
  emergencyLabelContainer: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
  },
  emergencyLabel: {
    marginBottom: "10px",
    marginTop: "20px",
    color: "gray",
  },
}));
