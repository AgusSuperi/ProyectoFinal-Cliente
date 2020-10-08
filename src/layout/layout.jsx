import React from "react";
import { CssBaseline } from "@material-ui/core";
import { useStyles } from "../assets/styles/layout/layoutStyles";
import Drawer from "../components/drawer/DrawerPanel";
import Map from "../views/map/map";

export default function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer />
      <main className={classes.mapContent}>
        <Map />
      </main>
    </div>
  );
}
