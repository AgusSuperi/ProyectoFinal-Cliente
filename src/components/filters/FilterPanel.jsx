import React, { useState } from "react";
import { useStyles } from "./Styles";
import { Divider } from "@material-ui/core";
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
  const { filterPanelOpen, setMarkers, windowWidth } = useCapsContext();
  const { setCapsBusStopMarkers, setUserBusStopMarkers } = useBusContext();
  const { data: specialities } = useSWR("/specialities/names");
  const { data: neighborhoods } = useSWR("/medicalcenters/neighborhoods");
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);
  const [selectedHours, setSelectedHours] = useState([]);

  const HandleUpdateListAndFilter = (selectedItems, setSelectedItems, item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
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

  return (
    <>
      {filterPanelOpen ? (
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
            handleUpdateListAndFilter={HandleUpdateListAndFilter}
          />
          <Divider />
          <CheckBoxList
            title="Especialidades"
            items={specialities}
            selectedItems={selectedSpecialities}
            setSelectedItems={setSelectedSpecialities}
            handleUpdateListAndFilter={HandleUpdateListAndFilter}
          />
          <Divider />
          <CheckBoxList
            title="Barrios"
            items={neighborhoods}
            selectedItems={selectedNeighborhoods}
            setSelectedItems={setSelectedNeighborhoods}
            handleUpdateListAndFilter={HandleUpdateListAndFilter}
          />
        </div>
      ) : undefined}
    </>
  );
};

export default FilterPanel;
