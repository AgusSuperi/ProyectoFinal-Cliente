import React, { useState } from "react";
import { Fab, ListItemIcon, ListItemText } from "@material-ui/core";
import { StyledMenu, StyledMenuItem, useStyles } from "./Styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import NearMeIcon from "@material-ui/icons/NearMe";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FilterListIcon from "@material-ui/icons/FilterList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useBusContext } from "../../context/BusContext";
import { useCapsContext } from "../../context/CapsContext";
import { useLocationContext } from "../../context/LocationContext";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";

export default function MenuButton() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(null);
  const { setCapsBusStopMarkers, setUserBusStopMarkers } = useBusContext();
  const {
    resetMarkers,
    setDrawerOpen,
    setFilterPanelOpen,
    selectedCaps,
    setSelectedCaps,
    windowWidth,
  } = useCapsContext();
  const { ShowClosestCapsOnMap } = useLocationContext();

  const handleOpenMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleShowAllCaps = () => {
    resetMarkers();
    setOpenMenu(null);
  };

  const handleShowClosestCaps = () => {
    ShowClosestCapsOnMap();
    setOpenMenu(null);
    setCapsBusStopMarkers([]);
    setUserBusStopMarkers([]);
  };

  const handleShowFilter = () => {
    if (selectedCaps) {
      selectedCaps.selected = false;
    }
    setFilterPanelOpen(true);
    setSelectedCaps("");
    setDrawerOpen(true);
    setOpenMenu(null);
  };

  return (
    <div className={classes.MenuButton}>
      {windowWidth > ScreenSizes.Small ? (
        <Fab
          size="medium"
          variant="extended"
          color="primary"
          onClick={handleOpenMenu}
          data-tut="reactour__menuButton"
        >
          Mostrar CAPS
          {openMenu ? (
            <ExpandLessIcon className={classes.menuButtonExtendedIcon} />
          ) : (
            <ExpandMoreIcon className={classes.menuButtonExtendedIcon} />
          )}
        </Fab>
      ) : (
        <Fab color="primary" size="small" onClick={handleOpenMenu} data-tut="reactour__menuButton">
          <MoreVertIcon />
        </Fab>
      )}

      <StyledMenu
        anchorEl={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={() => setOpenMenu(null)}
        data-tut="reactour__menuButton--observe"
      >
        <StyledMenuItem onClick={handleShowClosestCaps}>
          <ListItemIcon className={classes.icon}>
            <NearMeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Más cercano" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleShowAllCaps}>
          <ListItemIcon className={classes.icon}>
            <LocationOnIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Todos" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleShowFilter}>
          <ListItemIcon className={classes.icon}>
            <FilterListIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Filtrar" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
