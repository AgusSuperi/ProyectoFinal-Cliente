import React, { useState } from "react";
import { useStyles } from "../../assets/styles/components/drawerStyles";
import { Typography } from "@material-ui/core";
import { useCapsContext } from "../../context/CapsContext";
import DrawerBottomNavigation from "./DrawerBottomNavigation";
import TabPanels from "../tabPanel/TabPanels";
import FilterPanel from "../filters/FilterPanel";

const DrawerContainer = () => {
  const classes = useStyles();
  const { filterPanelOpen, selectedCaps } = useCapsContext();
  //TO DO: PONER NOMBRE SIGNIFICATIVO A ESTE VALUE, ES EL DEL TAB
  const [value, setValue] = useState(0);

  return (
    <div className={classes.drawerContainer}>
      {filterPanelOpen ? (
        //TO DO: ESTE DIV VA PARA EL COMPONENTE FILTER PANEL
        <div className={classes.filterPanel}>
          <FilterPanel />
        </div>
      ) : undefined}
      {selectedCaps ? (
        //TO DO: PASAR ESTO A OTRO COMPONENTE
        <div>
          <div className={classes.imageContainer}>
            <img src="/images/hospital.jpg" alt="Foto del CAPS" className={classes.image} />
          </div>
          <div className={classes.title}>
            <Typography variant="h5">{selectedCaps.nombre}</Typography>
            <Typography variant="subtitle1">{selectedCaps.barrio}</Typography>
          </div>
          <hr />
          <DrawerBottomNavigation value={value} setValue={setValue} />
          <div className={classes.tabPanels}>
            <TabPanels value={value} />
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default DrawerContainer;
