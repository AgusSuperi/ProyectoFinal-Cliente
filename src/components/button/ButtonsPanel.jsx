import React from "react";
import OpenOrCloseDrawerButton from "./OpenOrCloseDrawerButton";
import SearchAddress from "../searchAddress/SearchAddress";
import SearchCapsMenuButton from "./SearchCapsMenuButton";
import { useStyles } from "../../assets/styles/views/mapStyles";
import { useCapsContext } from "../../context/CapsContext";

const ButtonsPanel = () => {
  const classes = useStyles();
  const { filterPanelOpen, selectedCaps } = useCapsContext();

  return (
    <>
      <div className={classes.searchCapsMenuButton}>
        <SearchCapsMenuButton />
      </div>
      {selectedCaps || filterPanelOpen ? (
        <div className={classes.openOrCloseDrawerButton}>
          <OpenOrCloseDrawerButton />
        </div>
      ) : undefined}
      <div className={classes.searchAddressPanel}>
        <SearchAddress />
      </div>
    </>
  );
};

export default ButtonsPanel;
