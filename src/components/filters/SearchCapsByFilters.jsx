import { GetCapsByData } from "../../utils/api/Api";

const SERVER_ENDPOINT = process.env.REACT_APP_ENDPOINT;

export const SearchCapsByFilters = async (
  hoursList,
  neighborhoodsList,
  specialitiesList,
  setMarkers,
  setCapsBusStopMarkers,
  setUserBusStopMarkers,
  enqueueSnackbar
) => {
  if (hoursList.length === 0 && neighborhoodsList.length === 0 && specialitiesList.length === 0) {
    enqueueSnackbar("Debe completar al menos un campo", {
      variant: "warning",
    });
  } else {
    const data = {
      Horarios: hoursList,
      Barrios: neighborhoodsList,
      Especialidades: specialitiesList,
    };
    GetCapsByData(data, SERVER_ENDPOINT + "/filtros/centrossalud", setMarkers, enqueueSnackbar);
    setCapsBusStopMarkers([]);
    setUserBusStopMarkers([]);
  }
};
