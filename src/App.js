import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import { BusProvider } from "./context/BusContext";
import { CapsProvider } from "./context/CapsContext";
import { LocationProvider } from "./context/LocationContext";
import { SWRConfig } from "swr";
import { fetcher } from "./utils/api/Api";
import { SnackbarProvider } from "notistack";
import NotFound from "./views/notFound/NotFound";

export default function App() {
  return (
    //Alertas que aparecen ej busco cap cercano y no tengo la ubicacion mia
    //solo uno a la vez
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
     {/**Guarda en la cache */}
      <SWRConfig
        value={{
          refreshInterval: 0,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          fetcher,
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
      </SWRConfig>
    </SnackbarProvider>
  );
}
