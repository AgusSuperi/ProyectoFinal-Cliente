import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  infoContainer: {
    width: "100%",
    padding: "10px",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#D8D8D8",
    },
  },
}));
