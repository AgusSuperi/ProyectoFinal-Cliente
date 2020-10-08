import React from "react";
import { Fab, Zoom } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import { ButtonTooltip } from "../../assets/styles/components/buttonTooltipStyles";
import { useLocationContext } from "../../context/LocationContext";
import { useStyles } from "../../assets/styles/components/buttonStyles";

const AutoLocationButton = () => {
  const classes = useStyles();
  const { GetUserLocationByGpsAndShowMarker } = useLocationContext();

  return (
    <div className={classes.browserLocationButton}>
      <ButtonTooltip
        title="Muestra su ubicacion actual en el mapa"
        TransitionComponent={Zoom}
        arrow
        interactive
        placement="bottom"
      >
        <Fab color="primary" size="small" onClick={GetUserLocationByGpsAndShowMarker}>
          <MyLocationIcon />
        </Fab>
      </ButtonTooltip>
    </div>
  );
};

export default AutoLocationButton;
