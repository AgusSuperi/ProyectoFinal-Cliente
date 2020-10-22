import React, { useContext, useState, createContext } from "react";
import { GetDistanceFromLatLonInM } from "../utils/distanceCalculator/DistanceCalculator";
import { useCapsContext } from "../context/CapsContext";
import { useSnackbar } from "notistack";
import { Get } from "../utils/api/Api";
import { ErrorHandler } from "../utils/errorHandler/ErrorHandler";

const LocationContext = createContext();

export function LocationProvider(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [marcadorUsuario, setMarcadorUsuario] = useState("");
  const {
    backup,
    setDrawerOpen,
    setFilterPanelOpen,
    setMapCenter,
    setMarcadores,
    setSelectedCaps,
  } = useCapsContext();
  const apikey = "7190089a51d94b95bce447a7c05bb7c3";
  const url_geocode = "https://api.opencagedata.com/geocode/v1/json";

  const GetRequestUrl = (requestParameter) => {
    var request_url =
      url_geocode + "?key=" + apikey + "&q=" + requestParameter + "&pretty=1&no_annotations=1";
    return request_url;
  };

  const GetAddressByCoords = async (coords) => {
    const url = GetRequestUrl(coords[0] + "+" + coords[1]);
    const result = await Get(url);
    var resultComponent = result.results[0].components;
    var addressNumber = resultComponent.house_number;
    return resultComponent.road + " " + (addressNumber ? addressNumber : "");
  };

  const GetUserLocationByAddressAndShowMarker = (location) => {
    if (location) {
      var direccion = encodeURI(location + ", Bahia Blanca, Argentina");
      var url = GetRequestUrl(direccion);
      Get(url)
        .then((response) => {
          CreateAndShowUserMarker(response.results[0].geometry);
        })
        .catch((error) => {
          enqueueSnackbar(ErrorHandler(error), {
            variant: "error",
          });
        });
    }
  };

  const GetUserLocationByGpsAndShowMarker = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(ShowPosition);
    } else {
      enqueueSnackbar("Su dispositivo no soporta la geolocalización", {
        variant: "error",
      });
    }
  };

  const ShowPosition = (position) => {
    CreateAndShowUserMarker({ lat: position.coords.latitude, lng: position.coords.longitude });
  };

  const CreateAndShowUserMarker = (coordenadas) => {
    let marcador = {
      latitud: coordenadas.lat,
      longitud: coordenadas.lng,
    };
    setMarcadorUsuario(marcador);
    setMapCenter(coordenadas);
  };

  const ShowClosestCapsOnMap = () => {
    if (marcadorUsuario) {
      const closestCaps = GetClosestCapsByUserLocation([marcadorUsuario.latitud, marcadorUsuario.longitud]);
      setMarcadores([closestCaps]);
      setDrawerOpen(true);
      setFilterPanelOpen(false);
    } else {
      enqueueSnackbar("Debe ingresar su ubicación primero", {
        variant: "warning",
      });
    }
  };

  //TO DO: CAMBIAR A UN ARCHIVO A PARTE
  const GetClosestCapsByUserLocation = (userLocation) => {
    let closestCaps;
    let capsDistance = 100000;
    backup.forEach((caps) => {
      const distance = GetDistanceFromLatLonInM(
        userLocation[0],
        userLocation[1],
        caps.latitud,
        caps.longitud
      );
      if (distance < capsDistance) {
        closestCaps = { ...caps };
        capsDistance = distance;
      }
    });
    setSelectedCaps(closestCaps);
    return closestCaps;
  };

  const value = {
    marcadorUsuario,
    ShowClosestCapsOnMap,
    GetUserLocationByAddressAndShowMarker,
    GetUserLocationByGpsAndShowMarker,
    GetAddressByCoords,
  };

  return <LocationContext.Provider value={value} {...props} />;
}

export function useLocationContext() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocationContext debe ser usado dentro del proveedor LocationContext");
  }
  return context;
}
