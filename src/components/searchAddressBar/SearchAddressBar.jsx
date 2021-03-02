import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useStyles } from "./Styles";
import AutoLocationButton from "../button/AutoLocationButton";
import ScreenSizes from "../../utils/screenSizeValues/ScreenSizeValues";
import SearchButton from "../button/SearchButton";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import ShowUserMarkerByAddress from "../../functions/ShowUserMarkerByAddress";

const SearchAddressBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const windowWidth = useSelector((state) => state.window.windowWidth);

  const handleEnterKeyPress = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      ShowUserMarkerByAddress(location, dispatch, enqueueSnackbar);
    }
  };

  return (
    <div className={classes.searchAddressPanel} data-tut="reactour__searchBar">
      <div
        className={windowWidth > ScreenSizes.Small ? classes.searchLargeScreen : classes.searchSmallScreen}
      >
        {windowWidth > ScreenSizes.Small ? null : (
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        )}

        <InputBase
          placeholder={
            windowWidth > ScreenSizes.Small ? "Ingrese su ubicación actual" : "Ingrese su ubicación"
          }
          classes={{
            root: classes.inputRoot,
            input:
              windowWidth > ScreenSizes.Small ? classes.inputInputLargeScreen : classes.inputInputSmallScreen,
          }}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={handleEnterKeyPress}
        />

        <div className={classes.headerDivider} />
        {windowWidth > ScreenSizes.Small ? <SearchButton location={location} /> : <AutoLocationButton />}
      </div>
    </div>
  );
};

export default SearchAddressBar;
