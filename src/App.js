import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import { BusProvider } from "./context/BusContext";
import { CapsProvider } from "./context/CapsContext";
import { LocationProvider } from "./context/LocationContext";
import { SnackbarProvider } from "notistack";
import NotFound from "./views/notFound/NotFound";
import "./assets/css/app.css";

export default function App() {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
        <BusProvider>
          <CapsProvider>
            <LocationProvider>
              <Switch>
                <Route exact path="/" component={Layout} />
                <Route path="*" component={NotFound} />
              </Switch>
            </LocationProvider>
          </CapsProvider>
        </BusProvider>
    </SnackbarProvider>
  );
}
