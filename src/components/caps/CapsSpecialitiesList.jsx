import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ArrowIcon from "@material-ui/icons/ArrowRight";
import { useCapsContext } from "../../context/CapsContext";
import useSWR from "swr";

const CapsSpecialitiesList = () => {
  const { selectedCaps } = useCapsContext();
  const { data: specialities } = useSWR(`/medicalcenters/${selectedCaps.id}/specialities`);

  if (!specialities) {
    return (
      <List dense>
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
        <List dense>
          {(specialities || []).map((speciality) => (
            <ListItem key={speciality.id}>
              <ListItemIcon>
                <ArrowIcon />
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
