import React, { useContext, useState, createContext } from "react";

const BusContext = createContext();

export function BusProvider(props) {
  const [capsBusStopMarkers, setCapsBusStopMarkers] = useState([]);
  const [userBusStopMarkers, setUserBusStopMarkers] = useState([]);

  const value = {
    capsBusStopMarkers,
    userBusStopMarkers,
    setCapsBusStopMarkers,
    setUserBusStopMarkers,
  };

  return <BusContext.Provider value={value} {...props} />;
}

export function useBusContext() {
  const context = useContext(BusContext);
  if (context === undefined) {
    throw new Error("useBusContext debe ser usado dentro del proveedor BusContext");
  }
  return context;
}
