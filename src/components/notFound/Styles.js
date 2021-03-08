import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  imageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
  },
  image: {
    width: "300px",
  },
  button: {
    marginTop: 30,
  },
}));
