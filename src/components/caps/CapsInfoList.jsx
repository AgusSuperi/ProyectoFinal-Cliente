import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn";
import ClockIcon from "@material-ui/icons/QueryBuilder";
import PhoneIcon from "@material-ui/icons/Phone";
import { useCapsContext } from "../../context/CapsContext";
import { useStyles } from "./Styles";

const CapsInfoList = () => {
  const classes = useStyles();
  const { selectedCaps } = useCapsContext();

  return (
    <>
      {selectedCaps ? (
        <div className={classes.infoContainer}>
          <List component="nav">
            <ListItem>
              <ListItemIcon>
                <LocationIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={selectedCaps.address} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ClockIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={selectedCaps.openingHours} />
            </ListItem>
            <ListItem
              button
              component="a"
              href={"tel:" + selectedCaps.phoneNumber}
              className={classes.listItem}
            >
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={selectedCaps.phoneNumber} />
            </ListItem>
          </List>
        </div>
      ) : undefined}
    </>
  );
};

export default CapsInfoList;
