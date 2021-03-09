import React, { useState } from "react";
import { useStyles } from "./Styles";
import { Button, Divider, Fab } from "@material-ui/core";
import useSWR from "swr";
import { useSnackbar } from "notistack";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import CheckBoxList from "./CheckBoxList";
import SearchCapsByFilters from "../../functions/SearchCapsByFilters";
import RadioButtonList from "./RadioButtonList";
import { useDispatch, useSelector } from "react-redux";
import { resetMarkers } from "../../actions/MapActions";

const FilterPanel = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const { data: markers } = useSWR("/medicalcenters");
  const filterPanelOpen = useSelector((state) => state.drawer.filterPanelOpen);
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const dispatch = useDispatch();
  const { data: specialities } = useSWR("/specialities/names");
  const { data: neighborhoods } = useSWR("/medicalcenters/neighborhoods");
  const { data: filterOpeningHours } = useSWR("/medicalcenters/filterOpeningHours");
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);
  const [selectedFilterOpeningHours, setSelectedFilterOpeningHours] = useState("08:00 a 14:00");

  const HandleResetMarkers = async () => {
    dispatch(resetMarkers(markers));
  };

  const HandleUpdateList = (selectedItems, setSelectedItems, item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const HandleClearFilters = () => {
    setSelectedFilterOpeningHours("08:00 a 14:00");
    setSelectedNeighborhoods([]);
    setSelectedSpecialities([]);
    HandleResetMarkers();
  };

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
              onClick={() =>
                SearchCapsByFilters(
                  selectedFilterOpeningHours,
                  selectedNeighborhoods,
                  selectedSpecialities,
                  dispatch,
                  enqueueSnackbar
                )
              }
              className={classes.searchButton}
            >
              Buscar
            </Fab>
            <Button onClick={() => HandleClearFilters()}>Limpiar</Button>
          </div>
          <div
            className={
              windowWidth > ScreenSizes.Small ? classes.containerLargeScreen : classes.containerSmallScreen
            }
          >
            <RadioButtonList
              title="Horarios"
              items={filterOpeningHours}
              selectedItem={selectedFilterOpeningHours}
              setSelectedItem={setSelectedFilterOpeningHours}
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
