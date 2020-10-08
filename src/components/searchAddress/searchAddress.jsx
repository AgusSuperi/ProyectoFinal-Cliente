import React from "react";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useLocationContext } from "../../context/LocationContext";
import { useStyles } from "../../assets/styles/components/searchAddressStyles";
import AutoLocationButton from "../button/AutoLocationButton";

const SearchAddress = () => {
  const classes = useStyles();
  const { GetUserLocationByAddressAndShowMarker, setUbicacion } = useLocationContext();

  const handleInputChange = (event) => {
    setUbicacion(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      GetUserLocationByAddressAndShowMarker();
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
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div className={classes.headerDivider} />
      <AutoLocationButton />
    </div>
  );
};

export default SearchAddress;
