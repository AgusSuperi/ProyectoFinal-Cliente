import React from "react";
import { useStyles } from "./Styles";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import { GetData } from "../../utils/api/Api";
import { resetMarkers } from "../../actions/MapActions";

const CapsSpecialitiesList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const { data: specialities } = useSWR(`/medicalcenters/${selectedMarker.id}/specialities`);

  const SetMarkersBySpeciality = async (specialityId) => {
    var markers = await GetData(`/specialities/${specialityId}/medicalCenters`);
    var actual = markers.find((m) => m.id === selectedMarker.id);
    actual.selected = true;
    dispatch(resetMarkers(markers));
  };

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
      <div>
        <Typography variant="subtitle2" className={classes.specialityTitle}>
          Al hacer click sobre una especialidad, podrá ver todos los CAPS que la contengan
        </Typography>
        <List dense className={classes.list}>
          {(specialities || []).map((speciality) => (
            <ListItem button onClick={() => SetMarkersBySpeciality(speciality.id)} key={speciality.id}>
              <ListItemIcon>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
              </ListItemIcon>
              <ListItemText primary={speciality.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
};

export default CapsSpecialitiesList;
