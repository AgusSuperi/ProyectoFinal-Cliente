import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import ListIcon from "@material-ui/icons/List";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";

const DrawerBottomNavigation = ({ value, setValue }) => {
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Información" icon={<InfoIcon />} />
      <BottomNavigationAction label="Especialidades" icon={<ListIcon />} />
      <BottomNavigationAction label="Colectivos" icon={<DirectionsBusIcon />} />
    </BottomNavigation>
  );
};

export default DrawerBottomNavigation;
