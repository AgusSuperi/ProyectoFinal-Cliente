import axios from "axios";
import swal from "sweetalert";
import { ErrorHandler } from "../errorHandler/ErrorHandler";

const SERVER_DOMAIN = process.env.REACT_APP_ENDPOINT;

const getHeaders = () => {
  return {
    headers: {
      Accept: "application/json",
      Contentype: "application/json",
    },
    timeout: 1000 * 15,
  };
};

export const GetCapsByData = (data, path, setMarkers, enqueueSnackbar) => {
  fetch(SERVER_DOMAIN + path, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) =>
      res.length > 0
        ? setMarkers(res)
        : enqueueSnackbar("No se encontraron resultados", {
            variant: "warning",
          })
    )
    .catch((error) => {
      enqueueSnackbar(ErrorHandler(error), {
        variant: "error",
      });
    });
};

export const Get = (path) => {
  return axios.get(SERVER_DOMAIN + path, getHeaders());
};

export const GetCoordsByAddress = (path) =>
  fetch(path)
    .then((res) => res.json())
    .catch((error) => {
      swal({
        title: ErrorHandler(error),
        icon: "error",
      });
    });
