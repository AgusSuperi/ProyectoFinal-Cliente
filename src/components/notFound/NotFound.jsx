import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/img/notFound.png";
import { useStyles } from "./Styles";
import { Container, Fab } from "@material-ui/core";

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.imageContainer}>
      <img src={NotFoundImage} alt="Not found" className={classes.image} />
      <Fab variant="extended" color="primary" component={Link} to="/" className={classes.button}>
        Volver al inicio
      </Fab>
    </Container>
  );
};

export default NotFound;
