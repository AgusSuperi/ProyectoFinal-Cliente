import React from "react";
import { Fab, Zoom } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import { ButtonTooltip } from "./Styles";
import { useStyles } from "./Styles";
import { useDispatch } from "react-redux";
import { setMapCenter, setUserMarker } from "../../actions/MapActions";
import { useSnackbar } from "notistack";

const AutoLocationButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const GetUserLocationByGpsAndShowMarker = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(ShowPosition);
    } else {
      enqueueSnackbar("Su dispositivo no soporta la geolocalización", {
        variant: "error",
      });
    }
  };

  const ShowPosition = (position) => {
    let marker = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    dispatch(setUserMarker(marker));
    dispatch(setMapCenter(marker));
  };

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
