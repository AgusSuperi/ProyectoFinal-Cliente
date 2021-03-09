import { GetWithBody } from "../utils/api/Api";
import { setCapsBusStopMarkers, setUserBusStopMarkers } from "../actions/MapActions";
import { setMarkers } from "../actions/MapActions";

const SearchCapsByFilters = async (
  openingHours,
  neighborhoodsList,
  specialitiesList,
  dispatch,
  enqueueSnackbar
) => {
  const data = {
    OpeningHours: openingHours,
    Neighborhoods: neighborhoodsList,
    Specialities: specialitiesList,
  };
  const markers = await GetWithBody(data, "/medicalcenters/filter", enqueueSnackbar);
  if (!markers.length) {
    enqueueSnackbar("No se encontraron resultados", {
      variant: "info",
    });
  }
  dispatch(setMarkers(markers));
  dispatch(setCapsBusStopMarkers([]));
  dispatch(setUserBusStopMarkers([]));
};

export default SearchCapsByFilters;
