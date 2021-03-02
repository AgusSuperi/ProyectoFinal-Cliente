import swal from "sweetalert";
import ErrorHandler from "../errorHandler/ErrorHandler";

export const GetWithBody = async (data, path, enqueueSnackbar) => {
  return await fetch(path, {
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
    .then((res) => res)
    .catch((error) => {
      enqueueSnackbar(ErrorHandler(error), {
        variant: "error",
      });
    });
};

export const GetData = async (url) => {
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const Get = async (url) => {
  return await fetch(url).then((res) => res.json());
};

export const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((error) => {
      swal({
        title: ErrorHandler(error),
        icon: "error",
      });
    });
