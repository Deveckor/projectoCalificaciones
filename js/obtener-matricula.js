

export function obtenerMatricula(anios,nombre,apellidoPaterno,apellidoMaterno,direccion,grado,grupo) {
    
    let one = nombre.charAt(2),
    two = apellidoPaterno.substring(0,2),
    three = apellidoMaterno.slice(0,1),
    four = direccion.charAt(3),
    matricula = two.concat(three,one,anios,grupo,four,grado);


    return matricula;

}