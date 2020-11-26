import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import ArrowIcon from "@material-ui/icons/ArrowRight";
import { useCapsContext } from "../../context/CapsContext";
import { Get } from "../../utils/api/Api";
import { ErrorHandler } from "../../utils/errorHandler/ErrorHandler";
import { useSnackbar } from "notistack";

const CapsSpecialitiesList = () => {
  const { selectedCaps } = useCapsContext();
  const [specialities, setSpecialities] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setSpecialities(Get(`/centrossalud/${selectedCaps.id}/especialidades`));
  }, [selectedCaps]);

  useEffect(() => {
    Get(`/centrossalud/${selectedCaps.id}/especialidades`)
      .then((res) => setSpecialities(res.data))
      .catch((error) => {
        enqueueSnackbar(ErrorHandler(error), {
          variant: "error",
        });
      });
  }, [selectedCaps, enqueueSnackbar]);

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
                <ListItemText primary={speciality.nombre} />
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
