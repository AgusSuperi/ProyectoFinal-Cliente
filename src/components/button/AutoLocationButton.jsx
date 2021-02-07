import React from "react";
import { Fab, Zoom } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import { ButtonTooltip } from "./Styles";
import { useLocationContext } from "../../context/LocationContext";
import { useStyles } from "./Styles";

const AutoLocationButton = () => {
  const classes = useStyles();
  const { GetUserLocationByGpsAndShowMarker } = useLocationContext();

  return (
    <div className={classes.browserLocationButton}>
      <ButtonTooltip
        title="Mostrar ubicación actual en el mapa"
        TransitionComponent={Zoom}
        arrow
        interactive
        placement="bottom"
      >
        <Fab
          color="primary"
          size="small"
          onClick={GetUserLocationByGpsAndShowMarker}
          data-tut="reactour__autoLocationButton"
        >
          <MyLocationIcon />
        </Fab>
      </ButtonTooltip>
    </div>
  );
};

export default AutoLocationButton;
