import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function WelcomeDialog({ setTourIsOpen }) {
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            HOLA HOLA SEAN DOMINGO COMO CADA BIENVENIDO
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenTour} color="primary" variant="contained">
            Si, necesito ayuda
          </Button>
          <Button onClick={handleClose} color="default" variant="outlined">
            No, gracias
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
