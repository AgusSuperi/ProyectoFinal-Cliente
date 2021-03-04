import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Slider, Typography } from "@material-ui/core";
import BusIcon from "@material-ui/icons/DirectionsBus";
import { useStyles } from "./Styles";
import { GetClosestBusStopByLine, GetClosestCapsBusStop } from "../../utils/busesLogic/BusesLogic";
import { useDispatch, useSelector } from "react-redux";
import { setCapsBusStopMarkers, setMarkers, setUserBusStopMarkers } from "../../actions/MapActions";
import SliderMarks from "./SliderMarks";

const CapsBusStopsList = () => {
  const classes = useStyles();
  const [closestBuses, setClosestBuses] = useState([]);
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

  const handleShowBusStops = (closestBus) => {
    if (selectedMarker) {
      dispatch(setMarkers([selectedMarker]));
      dispatch(
        setCapsBusStopMarkers(
          GetClosestBusStopByLine(closestBus, [selectedMarker.latitude, selectedMarker.longitude])
        )
      );
      if (userMarker) {
        dispatch(
          setUserBusStopMarkers(GetClosestBusStopByLine(closestBus, [userMarker.lat, userMarker.lng]))
        );
      }
    }
  };
  return (
    <div className={classes.root}>
      <Typography gutterBottom>Seleccione un radio de cuadras</Typography>
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
          <Typography variant="subtitle1" className={classes.description}>
            Seleccione una línea para ver sus paradas cercanas
          </Typography>
          <List className={classes.infoContainer}>
            {(closestBuses || []).map((closestBus, value) => (
              <ListItem
                key={value}
                button
                onClick={() => handleShowBusStops(closestBus)}
                className={classes.listItem}
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
        <Typography variant="subtitle1" className={classes.description}>
          <b>No se encontraron colectivos en el radio seleccionado</b>
        </Typography>
      )}
    </div>
  );
};

export default CapsBusStopsList;
