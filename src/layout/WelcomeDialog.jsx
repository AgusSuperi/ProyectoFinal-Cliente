import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { useStyles } from "./Styles";
import hospitalMarker from "../assets/img/hospitalMarker.png";

export default function WelcomeDialog({ setTourIsOpen }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenTour = () => {
    setTourIsOpen(true);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialogTitle}>Bienvenido</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <span className={classes.dialogText}>
            Aquí encontrará información relacionada a los Centros de Atención Primaria de la Salud (CAPS) del
            partido de Bahía Blanca. Dicha información podrá ser visualizada al seleccionar cada uno de los
            marcadores (
          </span>
          <img src={hospitalMarker} alt="Marcador" className={classes.marker} />
          <span className={classes.dialogText}>) ubicados el mapa. </span>
          <br />
          <br />
          <span className={classes.dialogText}>
            Desea realizar un breve recorrido para conocer más la aplicación?
          </span>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenTour} color="primary" variant="contained">
            Si quiero
          </Button>
          <Button onClick={handleClose} color="default" variant="outlined">
            No, gracias
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
