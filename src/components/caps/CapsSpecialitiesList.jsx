import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import ArrowIcon from "@material-ui/icons/ArrowRight";
import { useCapsContext } from "../../context/CapsContext";
import useSWR from "swr";

const CapsSpecialitiesList = () => {
  const { selectedCaps } = useCapsContext();
  const { data: specialities } = useSWR(`/medicalcenters/${selectedCaps.id}/specialities`);

  return (
    <div>
      {(specialities || []).length > 0 ? (
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
      ) : (
        <Typography variant="subtitle1">No posee especialidades</Typography>
      )}
    </div>
  );
};

export default CapsSpecialitiesList;
