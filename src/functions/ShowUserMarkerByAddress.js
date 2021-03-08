import { setMapCenter, setUserMarker } from "../actions/MapActions";
import { Get } from "../utils/api/Api";
import ErrorHandler from "../utils/errorHandler/ErrorHandler";

const GEOCODE_URL = process.env.REACT_APP_GEOCODE_URL;
const API_KEY = process.env.REACT_APP_GEOCODE_KEY;

const ShowUserMarkerByAddress = (location, dispatch, enqueueSnackbar) => {
  if (location) {
    var direccion = encodeURI(location + ", Bahia Blanca, Argentina");
    var url = GetRequestUrl(direccion);
    Get(url)
      .then((response) => {
        CreateAndShowUserMarker(response.results[0].geometry, dispatch);
      })
      .catch((error) => {
        enqueueSnackbar(ErrorHandler(error), {
          variant: "error",
        });
      });
  } else {
    enqueueSnackbar("Debe ingresar su ubicación primero", {
      variant: "info",
    });
  }
};

const GetRequestUrl = (requestParameter) => {
  var request_url = GEOCODE_URL + "?key=" + API_KEY + "&q=" + requestParameter + "&pretty=1&no_annotations=1";
  return request_url;
};

const CreateAndShowUserMarker = (coords, dispatch) => {
  let marker = {
    lat: coords.lat,
    lng: coords.lng,
  };
  dispatch(setUserMarker(marker));
  dispatch(setMapCenter(coords));
};

export default ShowUserMarkerByAddress;
