import React from "react";
import { useStyles } from "../assets/styles/layout/layoutStyles";
import Drawer from "../components/drawer/DrawerPanel";
import Map from "../views/map/Map";

export default function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer />
      <main className={classes.mapContent}>
        <Map />
      </main>
    </div>
  );
}
