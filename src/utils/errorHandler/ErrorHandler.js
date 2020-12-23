const ErrorHandler = (error) => {
  console.log(error);
  if (!error.response) {
    return "El servidor no está disponible";
  }
};

export default ErrorHandler;
