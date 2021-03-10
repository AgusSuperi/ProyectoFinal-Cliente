import React, { useState } from "react";
import { Button, Dialog, DialogContent, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import ScreenSizes from "../utils/screenSizeValues/ScreenSizeValues";
import { dialogButton, dialogTitle, useStyles } from "./Styles";
import hospitalMarker from "../assets/img/hospitalMarker.png";

export default function WelcomeDialog({ setTourIsOpen }) {
  const classes = useStyles();
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const [open, setOpen] = useState(true);

  const handleOpenTour = () => {
    setTourIsOpen(true);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Typography variant="h6" style={dialogTitle}>
          ¡Bienvenido!
        </Typography>
        <DialogContent className={classes.dialogContent}>
          <span className={classes.dialogText}>
            Aquí encontrará información relacionada a los Centros de Atención Primaria de la Salud (CAPS) del
            partido de Bahía Blanca. Dicha información podrá ser visualizada al seleccionar cada uno de los
            marcadores (
          </span>
          <img src={hospitalMarker} alt="Marcador" className={classes.marker} />
          <span className={classes.dialogText}>) ubicados el mapa. </span>
          <br />
          <span className={classes.dialogText}>
            <b>¿Desea realizar un breve recorrido para conocer más la aplicación?</b>
          </span>
        </DialogContent>
        <div className={classes.buttonContainer}>
          <Button
            onClick={handleOpenTour}
            size={windowWidth > ScreenSizes.Small ? "large" : "medium"}
            color="primary"
            variant="contained"
            style={dialogButton}
          >
            Si quiero
          </Button>
          <Button
            onClick={() => setOpen(false)}
            size={windowWidth > ScreenSizes.Small ? "large" : "medium"}
            color="default"
            variant="outlined"
          >
            No, gracias
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
