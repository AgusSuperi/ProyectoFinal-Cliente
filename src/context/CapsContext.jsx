import React, { useContext, useState, useEffect, createContext } from "react";
import { Get } from "../utils/api/Api";
import { useBusContext } from "./BusContext";
import { useSnackbar } from "notistack";
import { ErrorHandler } from "../utils/errorHandler/ErrorHandler";

const CapsContext = createContext();

export function CapsProvider(props) {
  const [backup, setBackup] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [selectedCaps, setSelectedCaps] = useState("");
  const [zoom, setZoom] = useState(13);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState([-38.725151, -62.254951]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { setCapsBusStopMarkers, setUserBusStopMarkers } = useBusContext();
  const { enqueueSnackbar } = useSnackbar();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    Get("/centrossalud")
      .then((res) => setBackup(res.data))
      .catch((error) => {
        enqueueSnackbar(ErrorHandler(error), {
          variant: "error",
        });
      });
  }, [enqueueSnackbar]);

  useEffect(() => {
    if (backup) setMarkers([...backup]);
  }, [backup]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CloseBottomDrawer = () => {
    if (selectedCaps) {
      selectedCaps.selected = false;
    }
    setFilterPanelOpen(false);
    setSelectedCaps("");
    setDrawerOpen(false);
  };

  const resetMarkers = () => {
    if (backup) {
      setMarkers([...backup]);
    }
    setCapsBusStopMarkers([]);
    setUserBusStopMarkers([]);
    setDrawerOpen(false);
  };

  const value = {
    backup,
    drawerOpen,
    filterPanelOpen,
    markers,
    mapCenter,
    CloseBottomDrawer,
    resetMarkers,
    selectedCaps,
    setDrawerOpen,
    setFilterPanelOpen,
    setMarkers,
    setMapCenter,
    setSelectedCaps,
    setZoom,
    windowWidth,
    zoom,
  };

  return <CapsContext.Provider value={value} {...props} />;
}

export function useCapsContext() {
  const context = useContext(CapsContext);
  if (context === undefined) {
    throw new Error("useCapsContext debe ser usado dentro del proveedor CapsContext");
  }
  return context;
}
