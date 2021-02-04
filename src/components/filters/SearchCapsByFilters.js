import { GetCapsByData } from "../../utils/api/Api";

const SearchCapsByFilters = async (
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
      OpeningHours: hoursList,
      Neighborhoods: neighborhoodsList,
      Specialities: specialitiesList,
    };
    GetCapsByData(data, "/medicalcenters/filter", setMarkers, enqueueSnackbar);
    setCapsBusStopMarkers([]);
    setUserBusStopMarkers([]);
  }
};

export default SearchCapsByFilters;
