

export function obtenerEdad(dateToday, dateTwo) {
    let edad = dateToday - dateTwo,
    edadTwo = (edad/31556900000).toFixed(0);
    return edadTwo;
}