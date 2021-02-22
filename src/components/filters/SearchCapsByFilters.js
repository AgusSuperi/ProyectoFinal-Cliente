import { GetCapsByData } from "../../utils/api/Api";

const SearchCapsByFilters = async (
  openingHours,
  neighborhoodsList,
  specialitiesList,
  setMarkers,
  setCapsBusStopMarkers,
  setUserBusStopMarkers,
  enqueueSnackbar
) => {
  const data = {
    OpeningHours: openingHours,
    Neighborhoods: neighborhoodsList,
    Specialities: specialitiesList,
  };
  GetCapsByData(data, "/medicalcenters/filter", setMarkers, enqueueSnackbar);
  setCapsBusStopMarkers([]);
  setUserBusStopMarkers([]);
  }

export default SearchCapsByFilters;
