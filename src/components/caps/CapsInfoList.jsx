import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn";
import ClockIcon from "@material-ui/icons/QueryBuilder";
import PhoneIcon from "@material-ui/icons/Phone";
import { useSelector } from "react-redux";
import { useStyles } from "./Styles";

const CapsInfoList = () => {
  const classes = useStyles();
  const selectedMarker = useSelector((state) => state.map.selectedMarker);

  return (
    <>
      {selectedMarker ? (
        <div className={classes.infoContainer}>
          <List component="nav">
            <ListItem>
              <ListItemIcon>
                <LocationIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={selectedMarker.address} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ClockIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={selectedMarker.openingHours + " (Lunes a Viernes)"} />
            </ListItem>
            <ListItem
              button
              component="a"
              href={"tel:" + selectedMarker.phoneNumber}
              className={classes.listItem}
            >
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={selectedMarker.phoneNumber} />
            </ListItem>
          </List>
        </div>
      ) : undefined}
    </>
  );
};

export default CapsInfoList;
