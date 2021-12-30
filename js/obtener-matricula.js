
// En esta funcion ocupe varias funciones del objeto String para obtener ciertos caracteres para generar una matricula con el nombre los apellidos la direccion y lo concatene con los años grupo y grado.
export function obtenerMatricula(anios,nombre,apellidoPaterno,apellidoMaterno,direccion,grado,grupo) {
    
    let one = nombre.charAt(2),
    two = apellidoPaterno.substring(0,2),
    three = apellidoMaterno.slice(0,1),
    four = direccion.charAt(3),
    matricula = two.concat(three,one,anios,grupo,four,grado);


    return matricula;

}