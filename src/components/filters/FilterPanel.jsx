import React, { useState } from "react";
import { Button, Grid, Zoom } from "@material-ui/core";
import { useStyles } from "../../assets/styles/components/FilterStyles";
import { useCapsContext } from "../../context/CapsContext";
import { ButtonTooltip } from "../../assets/styles/components/buttonTooltipStyles";
import FilterSelect from "./FilterSelect";
import { SearchCapsByFilters } from "./SearchCapsByFilters";
import useSWR from "swr";
import { useSnackbar } from "notistack";

const FilterPanel = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const { setMarcadores } = useCapsContext();
  const { data: especialidades } = useSWR("/especialidades");
  const { data: neighborhoods } = useSWR("/barrios");
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);
  const [selectedHours, setSelectedHours] = useState([]);

  return (
    <div className={classes.container}>
      <FilterSelect
        items={["Las 24 hs", "08:00 a 14:00", "08:00 a 18:00"]}
        title="¿Qué horario/s busca?"
        selectedItems={selectedHours}
        setSelectedItems={setSelectedHours}
      />
      <FilterSelect
        items={neighborhoods}
        title="¿Qué barrio/s busca?"
        selectedItems={selectedNeighborhoods}
        setSelectedItems={setSelectedNeighborhoods}
      />
      <FilterSelect
        items={especialidades}
        title="¿Qué especialidad/es busca?"
        selectedItems={selectedSpecialities}
        setSelectedItems={setSelectedSpecialities}
      />
      <Grid container justify="center">
        <ButtonTooltip
          title="Busca los CAPS que cumplan con los criterios de búsqueda"
          TransitionComponent={Zoom}
          arrow
          interactive
          placement="right"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              SearchCapsByFilters(
                selectedHours,
                selectedNeighborhoods,
                selectedSpecialities,
                setMarcadores,
                enqueueSnackbar
              )
            }
            className={classes.button}
          >
            Encontrar CAPS
          </Button>
        </ButtonTooltip>
      </Grid>
    </div>
  );
};

export default FilterPanel;
