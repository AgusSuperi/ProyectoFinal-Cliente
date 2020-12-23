import { GetCapsByData } from "../../utils/api/Api";

export const SearchCapsByFilters = async (
  hoursList,
  neighborhoodsList,
  specialitiesList,
  setMarkers,
  setCapsBusStopMarkers,
  setUserBusStopMarkers,
  enqueueSnackbar
) => {
  console.log(hoursList, neighborhoodsList, specialitiesList);
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
    GetCapsByData(data, "/filtros/centrossalud", setMarkers, enqueueSnackbar);
    setCapsBusStopMarkers([]);
    setUserBusStopMarkers([]);
  }
};
