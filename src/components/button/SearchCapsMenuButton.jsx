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

//TO DO: CAMBIAR NOMBRE DE LA CLASE
export default function CustomizedMenus() {
  const classes = useStyles();
  //TO DO: VER NOMBRE DE ANCHOREL CAMBIAR A NOMBRE MAS MEJOR
  const [anchorEl, setAnchorEl] = useState(null);
  const { resetMarkers, setDrawerOpen, setFilterPanelOpen, setSelectedCaps, windowWidth } = useCapsContext();
  const { ShowClosestCapsOnMap } = useLocationContext();

  //TO DO: CAMBIAR NOMBRE
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleShowAllCaps = () => {
    resetMarkers();
    setAnchorEl(null);
  };

  const handleShowClosestCaps = () => {
    ShowClosestCapsOnMap();
    setAnchorEl(null);
  };

  //TO DO: CUANDO PONGO FILTRAR QUE SAQUE EL AGRANDADO DEL MARCADOR DEL CAP QUE ESTABA SELECCIONADO
  const handleShowFilter = () => {
    setFilterPanelOpen(true);
    setSelectedCaps("");
    setDrawerOpen(true);
    setAnchorEl(null);
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
          onClick={handleClick}
        >
          Mostrar CAPS
        </Button>
      ) : (
        <Fab color="primary" size="small" onClick={handleClick}>
          <MoreVertIcon />
        </Fab>
      )}

      <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
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
