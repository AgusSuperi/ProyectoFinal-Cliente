import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import BusIcon from "@material-ui/icons/DirectionsBus";
import { useStyles } from "./Styles";
import { GetClosestBusStopByLine, GetClosestCapsBusStop } from "../../utils/busesLogic/BusesLogic";
import { useDispatch, useSelector } from "react-redux";
import { setCapsBusStopMarkers, setMarkers, setUserBusStopMarkers } from "../../actions/MapActions";

const CapsBusStopsList = ({ radius }) => {
  const classes = useStyles();
  const [closestBuses, setClosestBuses] = useState([]);
  const userMarker = useSelector((state) => state.map.userMarker);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const dispatch = useDispatch();

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
    <>
      {closestBuses.length > 0 ? (
        <>
          <Typography variant="subtitle1">Seleccione una línea para ver sus paradas cercanas</Typography>
          <div className={classes.infoContainer}>
            <List dense>
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
          </div>
        </>
      ) : (
        <Typography variant="subtitle1">No se encontraron colectivos en el radio seleccionado</Typography>
      )}
    </>
  );
};

export default CapsBusStopsList;
