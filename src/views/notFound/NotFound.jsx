import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/img/notFound.png";
import { useStyles } from "../../assets/styles/views/NotFoundStyles";
import { Button, Container } from "@material-ui/core";

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.imageContainer}>
      <img src={NotFoundImage} alt="Not found" className={classes.image} />
      <Button
        variant="contained"
        color="secondary"
        size="small"
        component={Link}
        to="/"
        className={classes.button}
      >
        Volver al inicio
      </Button>
    </Container>
  );
};

export default NotFound;
