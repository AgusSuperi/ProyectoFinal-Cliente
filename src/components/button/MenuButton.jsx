import React, { useState } from "react";
import { ClickAwayListener, Fab, ListItemIcon, ListItemText } from "@material-ui/core";
import { StyledMenuItem, useStyles } from "./Styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import NearMeIcon from "@material-ui/icons/NearMe";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FilterListIcon from "@material-ui/icons/FilterList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useCapsContext } from "../../context/CapsContext";
import { useLocationContext } from "../../context/LocationContext";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerOpen, setFilterPanelOpen } from "../../actions/DrawerActions";
import { setCapsBusStopMarkers, setSelectedMarker, setUserBusStopMarkers } from "../../actions/MapActions";

export default function MenuButton() {
  const classes = useStyles();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const { resetMarkers } = useCapsContext();
  const dispatch = useDispatch();
  const { ShowClosestCapsOnMap } = useLocationContext();

  const handleOpenCloseMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleShowAllCaps = () => {
    resetMarkers();
    setMenuIsOpen(false);
  };

  const handleShowClosestCaps = () => {
    ShowClosestCapsOnMap();
    setMenuIsOpen(false);
    dispatch(setCapsBusStopMarkers([]));
    dispatch(setUserBusStopMarkers([]));
  };

  const handleShowFilter = () => {
    if (selectedMarker) {
      selectedMarker.selected = false;
    }
    dispatch(setFilterPanelOpen(true));
    dispatch(setSelectedMarker(""));
    dispatch(setDrawerOpen(true));
    setMenuIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setMenuIsOpen(false)}>
      <div className={classes.MenuButton}>
        {windowWidth > ScreenSizes.Small ? (
          <Fab
            size="medium"
            variant="extended"
            color="primary"
            onClick={handleOpenCloseMenu}
            data-tut="reactour__menuButton"
          >
            Mostrar CAPS
            {menuIsOpen ? (
              <ExpandLessIcon className={classes.menuButtonExtendedIcon} />
            ) : (
              <ExpandMoreIcon className={classes.menuButtonExtendedIcon} />
            )}
          </Fab>
        ) : (
          <Fab color="primary" size="small" onClick={handleOpenCloseMenu} data-tut="reactour__menuButton">
            <MoreVertIcon />
          </Fab>
        )}

        <div className={classes.MenuItemContainer} data-tut="reactour__menuButton--observe">
          {menuIsOpen && (
            <div className={classes.menuButtonContainer}>
              <StyledMenuItem onClick={handleShowClosestCaps}>
                <ListItemIcon className={classes.icon}>
                  <NearMeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Más cercano" className={classes.listItemText} />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleShowAllCaps}>
                <ListItemIcon className={classes.icon}>
                  <LocationOnIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Todos" className={classes.listItemText} />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleShowFilter}>
                <ListItemIcon className={classes.icon}>
                  <FilterListIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Filtrar" className={classes.listItemText} />
              </StyledMenuItem>
            </div>
          )}
        </div>
      </div>
    </ClickAwayListener>
  );
}
