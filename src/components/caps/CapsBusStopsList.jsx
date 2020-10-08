import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import BusIcon from "@material-ui/icons/DirectionsBus";
import { useStyles } from "../../assets/styles/components/capsBusStopsStyles";
import { GetClosestBusStopByLine, GetClosestCapsBusStop } from "../../utils/busesLogic/BusesLogic";
import { useBusContext } from "../../context/BusContext";
import { useCapsContext } from "../../context/CapsContext";
import { useLocationContext } from "../../context/LocationContext";

const CapsBusStopsList = ({ radius }) => {
  const classes = useStyles();
  const [closestBuses, setClosestBuses] = useState([]);
  const { selectedCaps, setMarcadores } = useCapsContext();
  const { setCapsBusStopMarkers, setUserBusStopMarkers } = useBusContext();
  const { marcadorUsuario } = useLocationContext();

  useEffect(() => {
    if (selectedCaps) {
      setClosestBuses(GetClosestCapsBusStop([selectedCaps.latitud, selectedCaps.longitud], radius));
    }
  }, [selectedCaps, radius]);

  const handleShowBusStops = (closestBus) => {
    if (selectedCaps) {
      setMarcadores([selectedCaps]);
      setCapsBusStopMarkers(
        GetClosestBusStopByLine(closestBus, [selectedCaps.latitud, selectedCaps.longitud])
      );
      if (marcadorUsuario) {
        setUserBusStopMarkers(
          GetClosestBusStopByLine(closestBus, [marcadorUsuario.latitud, marcadorUsuario.longitud])
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
