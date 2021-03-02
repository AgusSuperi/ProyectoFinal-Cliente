import React from "react";
import { Fab, Zoom } from "@material-ui/core";
import { ButtonTooltip } from "./Styles";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./Styles";
import { useDispatch } from "react-redux";
import ShowUserMarkerByAddress from "../../functions/ShowUserMarkerByAddress";
import { useSnackbar } from "notistack";

const SearchButton = ({ location }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className={classes.browserLocationButton}>
      <ButtonTooltip
        title="Mostrar ubicación en el mapa"
        TransitionComponent={Zoom}
        arrow
        interactive
        placement="bottom"
      >
        <Fab
          color="primary"
          size="small"
          onClick={() => ShowUserMarkerByAddress(location, dispatch, enqueueSnackbar)}
        >
          <SearchIcon />
        </Fab>
      </ButtonTooltip>
    </div>
  );
};

export default SearchButton;
