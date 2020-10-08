// Error Handler : Si recibe el tipo de error y un mensaje, lo muestra por consola y
//  retorna el mensaje apropiado al usuario. Sino, devuelve un mensaje de timeout
export const ErrorHandler = (error) => {
  console.log(error);
  if (!error.response) {
    return "El servidor no está disponible";
  }
};
