import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useLocationContext } from "../../context/LocationContext";
import { useCapsContext } from "../../context/CapsContext";
import { useStyles } from "../../assets/styles/components/searchAddressStyles";
import AutoLocationButton from "../button/AutoLocationButton";
import { ScreenSizes } from "../../utils/screenSizeValues/ScreenSizeValues";

const SearchAddressBar = () => {
  const classes = useStyles();
  const [location, setLocation] = useState("");
  const { GetUserLocationByAddressAndShowMarker } = useLocationContext();
  const { windowWidth } = useCapsContext();

  const handleEnterKeyPress = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      GetUserLocationByAddressAndShowMarker(location);
    }
  };

  return (
    <div className={windowWidth > ScreenSizes.Small ? classes.searchLargeScreen : classes.searchSmallScreen}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Ingrese su ubicación"
        classes={{
          root: classes.inputRoot,
          input:
            windowWidth > ScreenSizes.Small ? classes.inputInputLargeScreen : classes.inputInputSmallScreen,
        }}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleEnterKeyPress}
      />
      <div className={classes.headerDivider} />
      <AutoLocationButton />
    </div>
  );
};

export default SearchAddressBar;
