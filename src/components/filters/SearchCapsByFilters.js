import { GetCapsByData } from "../../utils/api/Api";
import { setCapsBusStopMarkers, setUserBusStopMarkers } from "../../actions/MapActions";

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
  GetCapsByData(data, "/medicalcenters/filter", dispatch, enqueueSnackbar);
  dispatch(setCapsBusStopMarkers([]));
  dispatch(setUserBusStopMarkers([]));
  }

export default SearchCapsByFilters;
