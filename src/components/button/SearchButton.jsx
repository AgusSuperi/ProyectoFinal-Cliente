import React from "react";
import { Fab, Zoom } from "@material-ui/core";
import { ButtonTooltip } from "./Styles";
import SearchIcon from "@material-ui/icons/Search";
import { useLocationContext } from "../../context/LocationContext";
import { useStyles } from "./Styles";

const SearchButton = ({ location }) => {
  const classes = useStyles();
  const { GetUserLocationByAddressAndShowMarker } = useLocationContext();

  return (
    <div className={classes.browserLocationButton}>
      <ButtonTooltip
        title="Mostrar ubicación en el mapa"
        TransitionComponent={Zoom}
        arrow
        interactive
        placement="bottom"
      >
        <Fab color="primary" size="small" onClick={() => GetUserLocationByAddressAndShowMarker(location)}>
          <SearchIcon />
        </Fab>
      </ButtonTooltip>
    </div>
  );
};

export default SearchButton;
