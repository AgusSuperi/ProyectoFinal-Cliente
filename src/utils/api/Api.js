import swal from "sweetalert";
import ErrorHandler from "../errorHandler/ErrorHandler";

export const GetCapsByData = (data, path, setMarkers, enqueueSnackbar) => {
  fetch(path, {
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
      res.data.length > 0
        ? setMarkers(res.data)
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

export const Get = async (url) => {
  return await fetch(url)
    .then((res) => res.json())
    .then(res => res.data);
};

export const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then(res => res.data)
    .catch((error) => {
      swal({
        title: ErrorHandler(error),
        icon: "error",
      });
    });
