import React, { useState } from "react";
import { Button, Dialog, DialogContent, IconButton } from "@material-ui/core";
import { useCapsContext } from "../context/CapsContext";
import ScreenSizes from "../utils/screenSizeValues/ScreenSizeValues";
import { useStyles } from "./Styles";
import hospitalMarker from "../assets/img/hospitalMarker.png";
import welcome from "../assets/img/welcome.png";
import CloseIcon from "@material-ui/icons/Close";

export default function WelcomeDialog({ setTourIsOpen }) {
  const classes = useStyles();
  const { windowWidth } = useCapsContext();
  const [open, setOpen] = useState(true);

  const handleOpenTour = () => {
    setTourIsOpen(true);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className={classes.welcomeImageContainer}>
          <img src={welcome} alt="Imagen de bienvenida" className={classes.welcomeImage} />
        </div>
        <IconButton className={classes.closeButton} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
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
            className={classes.button}
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
