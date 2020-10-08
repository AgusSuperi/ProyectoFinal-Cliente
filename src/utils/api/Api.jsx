import swal from "sweetalert";
import { ErrorHandler } from "../errorHandler/ErrorHandler";

export const GetCapsByData = (data, path, setMarcadores, enqueueSnackbar) => {
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
      res.length > 0
        ? setMarcadores(res)
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
  return await fetch(url).then((res) => res.json());
};

export const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .catch((error) => {
      swal(ErrorHandler(error), {
        icon: "error",
      });
    });
