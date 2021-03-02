import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import { SWRConfig } from "swr";
import { fetcher } from "./utils/api/Api";
import { SnackbarProvider } from "notistack";
import NotFound from "./components/notFound/NotFound";
import "./Styles.css";

export default function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <SWRConfig
        value={{
          refreshInterval: 0,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          fetcher,
        }}
      >
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </SWRConfig>
    </SnackbarProvider>
  );
}
