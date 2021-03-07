import React from "react";
import { Fab, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn";
import ClockIcon from "@material-ui/icons/QueryBuilder";
import PhoneIcon from "@material-ui/icons/Phone";
import { useSelector } from "react-redux";
import { useStyles } from "./Styles";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";

const CapsInfoList = () => {
  const classes = useStyles();
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const windowWidth = useSelector((state) => state.window.windowWidth);

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
          <div
            className={
              windowWidth > ScreenSizes.Small ? classes.emergencyRootDesktop : classes.emergencyRootMobile
            }
          >
            <Typography variant="subtitle2" className={classes.emergencyLabel}>
              Emergencias médicas
            </Typography>
            <Grid container justify="center" className={classes.emergencyContainer}>
              <Grid item>
                <a href="tel:107">
                  <Fab color="primary" size={windowWidth > ScreenSizes.Small ? "medium" : "small"}>
                    <PhoneIcon />
                  </Fab>
                </a>
              </Grid>
              <Grid item className={classes.emergencyLabelContainer}>
                <Typography variant={windowWidth > ScreenSizes.Small ? "h4" : "h5"}>107</Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default CapsInfoList;
