import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  imageContainer: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
  },
  image: {
    width: "100%",
  },
  button: {
    marginTop: 30,
  },
}));
