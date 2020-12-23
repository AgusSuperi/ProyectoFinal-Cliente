import React, { useEffect, useState } from "react";
import { Button, Divider, Grid, Zoom } from "@material-ui/core";
import { useStyles } from "../../assets/styles/components/FilterStyles";
import { useCapsContext } from "../../context/CapsContext";
import { useBusContext } from "../../context/BusContext";
import { ButtonTooltip } from "../../assets/styles/components/buttonTooltipStyles";
import FilterSelect from "./FilterSelect";
import { SearchCapsByFilters } from "./SearchCapsByFilters";
import { Get } from "../../utils/api/Api";
import { useSnackbar } from "notistack";
import { ScreenSizes } from "../../utils/screenSizeValues/ScreenSizeValues";
import { ErrorHandler } from "../../utils/errorHandler/ErrorHandler";
import CheckBoxList from "./CheckBoxList";

const FilterPanel = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const { filterPanelOpen, setMarkers, windowWidth } = useCapsContext();
  const { setCapsBusStopMarkers, setUserBusStopMarkers } = useBusContext();
  const [specialities, setSpecialities] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);
  const [selectedHours, setSelectedHours] = useState([]);

  const handleUpdateListAndFilter = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter((x) => x !== item));
    } else {
      setList([...list, item]);
    }
    SearchCapsByFilters(
      selectedHours,
      selectedNeighborhoods,
      selectedSpecialities,
      setMarkers,
      setCapsBusStopMarkers,
      setUserBusStopMarkers,
      enqueueSnackbar
    );
  };

  console.log(selectedHours, selectedNeighborhoods, selectedSpecialities);

  useEffect(() => {
    Get("/especialidades")
      .then((res) => setSpecialities(res.data))
      .catch((error) => {
        enqueueSnackbar(ErrorHandler(error), {
          variant: "error",
        });
      });
  }, [enqueueSnackbar]);

  useEffect(() => {
    Get("/barrios")
      .then((res) => setNeighborhoods(res.data))
      .catch((error) => {
        enqueueSnackbar(ErrorHandler(error), {
          variant: "error",
        });
      });
  }, [enqueueSnackbar]);

  return (
    <>
      {filterPanelOpen ? (
        <div
          className={
            windowWidth > ScreenSizes.Small
              ? classes.containerLargeScreen
              : classes.containerSmallScreen
          }
        >
          <CheckBoxList
            title="Horarios"
            items={["Las 24 hs", "08:00 a 14:00", "08:00 a 18:00"]}
            selectedItems={selectedHours}
            setSelectedItems={setSelectedHours}
            handleUpdateListAndFilter={handleUpdateListAndFilter}
          />
          <Divider />
          <CheckBoxList
            title="Especialidades"
            items={specialities}
            selectedItems={selectedSpecialities}
            setSelectedItems={setSelectedSpecialities}
            handleUpdateListAndFilter={handleUpdateListAndFilter}
          />
          <Divider />
          <CheckBoxList
            title="Barrios"
            items={neighborhoods}
            selectedItems={selectedNeighborhoods}
            setSelectedItems={setSelectedNeighborhoods}
            handleUpdateListAndFilter={handleUpdateListAndFilter}
          />
        </div>
      ) : undefined}
    </>
  );
};

export default FilterPanel;
