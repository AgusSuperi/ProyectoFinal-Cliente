import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import { Button, Divider, Fab } from "@material-ui/core";
import { useCapsContext } from "../../context/CapsContext";
import { useBusContext } from "../../context/BusContext";
import useSWR from "swr";
import { useSnackbar } from "notistack";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import CheckBoxList from "./CheckBoxList";
import SearchCapsByFilters from "./SearchCapsByFilters";

const FilterPanel = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const { filterPanelOpen, resetMarkers, setMarkers, windowWidth } = useCapsContext();
  const { setCapsBusStopMarkers, setUserBusStopMarkers } = useBusContext();
  const { data: specialities } = useSWR("/specialities/names");
  const { data: neighborhoods } = useSWR("/medicalcenters/neighborhoods");
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);
  const [selectedHours, setSelectedHours] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const HandleUpdateList = (selectedItems, setSelectedItems, item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const HandleClearFilters = () => {
    setSelectedHours([]);
    setSelectedNeighborhoods([]);
    setSelectedSpecialities([]);
    resetMarkers();
  };

  useEffect(() => {
    if (!selectedHours.length && !selectedSpecialities.length && !selectedNeighborhoods.length) {
      setDisabled(true);
    } else setDisabled(false);
  }, [selectedHours, selectedSpecialities, selectedNeighborhoods]);

  return (
    <>
      {filterPanelOpen ? (
        <>
          <div
            className={
              windowWidth > ScreenSizes.Small
                ? classes.buttonContainerLargeScreen
                : classes.buttonContainerSmallScreen
            }
          >
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              disabled={disabled}
              onClick={() =>
                SearchCapsByFilters(
                  selectedHours,
                  selectedNeighborhoods,
                  selectedSpecialities,
                  setMarkers,
                  setCapsBusStopMarkers,
                  setUserBusStopMarkers,
                  enqueueSnackbar
                )
              }
              className={classes.searchButton}
            >
              Buscar
            </Fab>
            <Button disabled={disabled} onClick={() => HandleClearFilters()}>
              Limpiar
            </Button>
          </div>
          <div
            className={
              windowWidth > ScreenSizes.Small ? classes.containerLargeScreen : classes.containerSmallScreen
            }
          >
            <CheckBoxList
              title="Horarios"
              items={["Las 24 hs", "08:00 a 14:00", "08:00 a 18:00"]}
              selectedItems={selectedHours}
              setSelectedItems={setSelectedHours}
              handleUpdateList={HandleUpdateList}
            />
            <Divider />
            <CheckBoxList
              title="Especialidades"
              items={specialities}
              selectedItems={selectedSpecialities}
              setSelectedItems={setSelectedSpecialities}
              handleUpdateList={HandleUpdateList}
            />
            <Divider />
            <CheckBoxList
              title="Barrios"
              items={neighborhoods}
              selectedItems={selectedNeighborhoods}
              setSelectedItems={setSelectedNeighborhoods}
              handleUpdateList={HandleUpdateList}
            />
          </div>
        </>
      ) : undefined}
    </>
  );
};

export default FilterPanel;
