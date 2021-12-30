
// En esta funcion me sirvio para obtener la edad segun la fecha de nacimiento, le reste la fecha ingresada a la fecha cero del objeto Date y lo dividi entre los milisegundos que tiene un año para convertirlo en años.
export function obtenerEdad(dateToday, dateTwo) {
    let edad = dateToday - dateTwo,
    edadTwo = (edad/31556900000).toFixed(0);
    return edadTwo;
}