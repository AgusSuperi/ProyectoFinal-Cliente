import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useLocationContext } from "../../context/LocationContext";
import { useStyles } from "../../assets/styles/components/searchAddressStyles";
import AutoLocationButton from "../button/AutoLocationButton";

const SearchAddress = () => {
  const classes = useStyles();
  const [location, setLocation] = useState("");
  const { GetUserLocationByAddressAndShowMarker } = useLocationContext();

  const handleEnterKeyPress = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      GetUserLocationByAddressAndShowMarker(location);
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Ingrese su ubicación"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleEnterKeyPress}
      />
      <div className={classes.headerDivider} />
      <AutoLocationButton />
    </div>
  );
};

export default SearchAddress;
