import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  infoContainer: {
    width: "100%",
    marginTop: "10px",
  },
  description: {
    marginTop: "25px",
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
    marginTop: "10px",
  },
}));
