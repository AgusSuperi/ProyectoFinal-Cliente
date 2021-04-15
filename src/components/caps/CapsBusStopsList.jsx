import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Slider, Typography } from "@material-ui/core";
import BusIcon from "@material-ui/icons/DirectionsBus";
import { useStyles } from "./Styles";
import { GetClosestBusStopByLine, GetClosestCapsBusStop } from "../../utils/busesLogic/BusesLogic";
import { useDispatch, useSelector } from "react-redux";
import { setCapsBusStopMarkers, setMarkers, setUserBusStopMarkers } from "../../actions/MapActions";
import SliderMarks from "./SliderMarks";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const CapsBusStopsList = () => {
  const classes = useStyles();
  const [closestBuses, setClosestBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState({});
  const [selectedBusStop, setSelectedBusStop] = useState(-1);
  const [radius, setRadius] = useState(1);
  const userMarker = useSelector((state) => state.map.userMarker);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const dispatch = useDispatch();

  function valueLabelFormat(value) {
    return SliderMarks.findIndex((mark) => mark.value === value) + 1;
  }

  const handleChangeValue = (event, value) => {
    setRadius(valueLabelFormat(value) * 100);
  };

  useEffect(() => {
    if (selectedMarker) {
      setClosestBuses(GetClosestCapsBusStop([selectedMarker.latitude, selectedMarker.longitude], radius));
    }
  }, [selectedMarker, radius]);

  useEffect(() => {
    if (userMarker && selectedBus) {
      dispatch(setUserBusStopMarkers(GetClosestBusStopByLine(selectedBus, [userMarker.lat, userMarker.lng])));
    }
  }, [dispatch, userMarker, selectedBus]);

  const handleShowBusStops = (event, value, closestBus) => {
    if (selectedMarker) {
      setSelectedBusStop(value);
      setSelectedBus(closestBus);
      dispatch(setMarkers([selectedMarker]));
      dispatch(
        setCapsBusStopMarkers(
          GetClosestBusStopByLine(closestBus, [selectedMarker.latitude, selectedMarker.longitude])
        )
      );
    }
  };
  return (
    <div>
      <Typography variant="subtitle2" className={classes.firstStep}>
        Paso 1
      </Typography>
      <Typography variant="subtitle2" className={classes.title}>
        Seleccione un radio de cuadras para mostrar las líneas de colectivo más cercanas al CAPS
      </Typography>
      <Slider
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        step={null}
        marks={SliderMarks}
        valueLabelDisplay="auto"
        onChange={handleChangeValue}
      />

      {closestBuses.length > 0 ? (
        <>
          <Typography variant="subtitle2" className={classes.secondStep}>
            Paso 2
          </Typography>
          <Typography variant="subtitle2">
            Seleccione una línea para conocer sus paradas, tanto de ida como de vuelta
          </Typography>
          <List className={classes.infoContainer}>
            {(closestBuses || []).map((closestBus, value) => (
              <ListItem
                key={value}
                button
                selected={selectedBusStop === value}
                onClick={(event) => handleShowBusStops(event, value, closestBus)}
              >
                <ListItemIcon>
                  <BusIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={closestBus} />
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <Typography variant="subtitle2" className={classes.wrapIcon}>
          <ErrorOutlineIcon className={classes.linkIcon} /> No se encontraron paradas de colectivo en el radio
          de cuadras seleccionado
        </Typography>
      )}
    </div>
  );
};

export default CapsBusStopsList;
