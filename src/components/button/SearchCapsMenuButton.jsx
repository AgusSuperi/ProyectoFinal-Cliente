import React, { useState } from "react";
import { Button, Fab, ListItemIcon, ListItemText } from "@material-ui/core";
import { StyledMenu, StyledMenuItem, useStyles } from "../../assets/styles/components/menuItemStyles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NearMeIcon from "@material-ui/icons/NearMe";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FilterListIcon from "@material-ui/icons/FilterList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useCapsContext } from "../../context/CapsContext";
import { useLocationContext } from "../../context/LocationContext";

export default function SearchCapsMenuButton() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(null);
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
  };

  const handleShowFilter = () => {
    selectedCaps.selected = false;
    setFilterPanelOpen(true);
    setSelectedCaps("");
    setDrawerOpen(true);
    setOpenMenu(null);
  };

  return (
    <div>
      {windowWidth > 599 ? (
        <Button
          startIcon={<VisibilityIcon />}
          endIcon={<ExpandMoreIcon />}
          size="small"
          variant="contained"
          color="primary"
          onClick={handleOpenMenu}
        >
          Mostrar CAPS
        </Button>
      ) : (
        <Fab color="primary" size="small" onClick={handleOpenMenu}>
          <MoreVertIcon />
        </Fab>
      )}

      <StyledMenu anchorEl={openMenu} keepMounted open={Boolean(openMenu)} onClose={() => setOpenMenu(null)}>
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
