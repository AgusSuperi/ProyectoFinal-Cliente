import React from "react";
import OpenOrCloseDrawerButton from "./OpenOrCloseDrawerButton";
import SearchAddress from "../searchAddressBar/SearchAddressBar";
import SearchCapsMenuButton from "./SearchCapsMenuButton";
import { useStyles } from "../../assets/styles/views/mapStyles";
import { useCapsContext } from "../../context/CapsContext";
import { ScreenSizes } from "../../utils/screenSizeValues/ScreenSizeValues";

const ButtonsPanel = () => {
  const classes = useStyles();
  const { filterPanelOpen, selectedCaps, windowWidth } = useCapsContext();

  return (
    <>
      <div className={classes.searchCapsMenuButton}>
        <SearchCapsMenuButton />
      </div>
      {(selectedCaps || filterPanelOpen) && windowWidth > ScreenSizes.Small ? (
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
