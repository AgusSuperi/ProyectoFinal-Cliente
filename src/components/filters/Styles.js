import { makeStyles } from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
  formControlMobile: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  containerLargeScreen: {
    marginTop: "10px",
    width: "95%",
    margin: "auto",
    overflow: "auto",
  },
  containerSmallScreen: {
    marginTop: "20px",
    width: "100%",
    margin: "auto",
    overflow: "auto",
  },
  button: {
    marginTop: 10,
  },
  root: {
    display: "flex",
  },  
  showMoreOrLessText: {
    cursor: "pointer",
    color: "#1B69B7",
    fontWeight: "bold",
    "&:hover": {
      color: "#094077",
    },
  },
  showMoreOrLessIcon: {
    cursor: "pointer",
  },
  formLabel: {
    color: "grey",
    fontWeight: "bold",
  },
  searchButton: {
    margin: theme.spacing(1),
  },
  buttonContainerLargeScreen: {
    marginTop: "70px",
    textAlign: "left",
  },
  buttonContainerSmallScreen: {
    marginTop: "20px",
    width: "100%",
    margin: "auto",
  },
}));

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
