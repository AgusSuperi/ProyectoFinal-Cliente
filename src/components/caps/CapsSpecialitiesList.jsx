import React from "react";
import { useStyles } from "./Styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSelector } from "react-redux";
import useSWR from "swr";

const CapsSpecialitiesList = () => {
  const classes = useStyles();
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const { data: specialities } = useSWR(`/medicalcenters/${selectedMarker.id}/specialities`);

  if (!specialities) {
    return (
      <List dense className={classes.list}>
        {[...Array(5)].map((e, i) => (
          <ListItem key={i}>
            <ListItemIcon>
              <Skeleton animation="wave" width={10} />
            </ListItemIcon>
            <ListItemText primary={<Skeleton animation="wave" />} />
          </ListItem>
        ))}
      </List>
    );
  } else {
    return (
      <List dense className={classes.list}>
        {(specialities || []).map((speciality) => (
          <ListItem key={speciality.id}>
            <ListItemIcon>
              <ArrowForwardIosIcon className={classes.arrowIcon} />
            </ListItemIcon>
            <ListItemText primary={speciality.name} />
          </ListItem>
        ))}
      </List>
    );
  }
};

export default CapsSpecialitiesList;
