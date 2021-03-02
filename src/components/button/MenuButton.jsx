import React, { useState } from "react";
import { ClickAwayListener, Fab, ListItemIcon, ListItemText } from "@material-ui/core";
import { StyledMenuItem, useStyles } from "./Styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import NearMeIcon from "@material-ui/icons/NearMe";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FilterListIcon from "@material-ui/icons/FilterList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerOpen, setFilterPanelOpen } from "../../actions/DrawerActions";
import {
  setCapsBusStopMarkers,
  setMarkers,
  setSelectedMarker,
  setUserBusStopMarkers,
} from "../../actions/MapActions";
import { GetData, GetWithBody } from "../../utils/api/Api";
import { resetMarkers } from "../../actions/MapActions";
import { useSnackbar } from "notistack";

export default function MenuButton() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const userMarker = useSelector((state) => state.map.userMarker);
  const dispatch = useDispatch();

  const HandleResetMarkers = async () => {
    var markers = await GetData("/medicalcenters");
    dispatch(resetMarkers(markers));
  };

  const HandleOpenCloseMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const HandleShowAllCaps = () => {
    HandleResetMarkers();
    setMenuIsOpen(false);
  };

  const HandleShowClosestCaps = async () => {
    if (userMarker) {
      const data = {
        latitude: userMarker.lat,
        longitude: userMarker.lng,
      };
      var closestCaps = await GetWithBody(data, "/medicalcenters/closest", enqueueSnackbar);
      dispatch(setSelectedMarker(closestCaps));
      dispatch(setMarkers([closestCaps]));
      dispatch(setDrawerOpen(true));
      dispatch(setFilterPanelOpen(false));
      dispatch(setCapsBusStopMarkers([]));
      dispatch(setUserBusStopMarkers([]));
    } else {
      enqueueSnackbar("Debe ingresar su ubicación primero", {
        variant: "warning",
      });
    }
    setMenuIsOpen(false);
  };

  const HandleShowFilter = () => {
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
            onClick={HandleOpenCloseMenu}
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
          <Fab color="primary" size="small" onClick={HandleOpenCloseMenu} data-tut="reactour__menuButton">
            <MoreVertIcon />
          </Fab>
        )}

        <div className={classes.MenuItemContainer} data-tut="reactour__menuButton--observe">
          {menuIsOpen && (
            <div className={classes.menuButtonContainer}>
              <StyledMenuItem onClick={HandleShowClosestCaps}>
                <ListItemIcon className={classes.icon}>
                  <NearMeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Más cercano" className={classes.listItemText} />
              </StyledMenuItem>
              <StyledMenuItem onClick={HandleShowAllCaps}>
                <ListItemIcon className={classes.icon}>
                  <LocationOnIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Todos" className={classes.listItemText} />
              </StyledMenuItem>
              <StyledMenuItem onClick={HandleShowFilter}>
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
