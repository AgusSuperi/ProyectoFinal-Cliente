import React, { useState } from "react";
import { Button, Grid, Zoom } from "@material-ui/core";
import { useStyles } from "./Styles";
import { useCapsContext } from "../../context/CapsContext";
import { useBusContext } from "../../context/BusContext";
import { ButtonTooltip } from "../button/Styles";
import FilterSelect from "./FilterSelect";
import SearchCapsByFilters from "./SearchCapsByFilters";
import useSWR from "swr";
import { useSnackbar } from "notistack";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";

const FilterPanel = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const { filterPanelOpen, setMarkers, windowWidth } = useCapsContext();
  const { setCapsBusStopMarkers, setUserBusStopMarkers } = useBusContext();
  const { data: especialidades } = useSWR("/especialidades");
  const { data: neighborhoods } = useSWR("/barrios");
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);
  const [selectedHours, setSelectedHours] = useState([]);

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
