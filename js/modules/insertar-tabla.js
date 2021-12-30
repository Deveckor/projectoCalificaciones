const d = document;

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Invesigue esta funcion para poder darle entre que numeros se crearan las callificaciones en la funcion Math.random[]
function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

function insertarTabla($alumnos, $tbodyTwo) {
        
    let o = 0;
    // Este ciclo for me ayudo para insertar cada alumno de la tabla anterior.
    for (let i = 0; i < $alumnos.length; i++) {
        
        let promedio = 0;
        let $tr = d.createElement('tr'),
        $th = d.createElement('th');
        $tbodyTwo.appendChild($tr);
        
        $tr.appendChild($th);
        //Me di cuenta que podia obtener el valor de la tabla ya que en la consola vi los objetos que me devolvia el querySector y que di cuenta que se agregaba en un areglo cada uno y para obtener el valor se le agregaba el outerText
        $th.textContent = $alumnos[i].outerText;
        

        for (let i = 0; i < 5; i++) {
            let $th = d.createElement('th');
            $tr.appendChild($th);
            // Aqui le agregue el mismo valor a cada clase para poder sumar solo las calificaciones de la misma fila
            $th.classList.add(`promedio${o}`);
            $th.textContent = getRandomArbitrary(50,100);
        }
        // Este ciclo me sirvio para sumar los valores de todas las calificaciones para sacar el promedio
        for (let i = 0; i < 5; i++) {
            let $promedio = d.querySelectorAll(`.promedio${o}`);
            let prom = parseFloat($promedio[i].outerText);
            
            promedio += prom

        }
        
        let $thOne = d.createElement('th'),
        promedioOne = (promedio/5).toFixed(2)
        $tr.appendChild($thOne);
        // Agregue esta clase para poder ocupar el valor en una siguiente funcion.
        $thOne.classList.add('promfinal')
        $thOne.textContent = promedioOne;

        
        o++;
        
    }

}


export { insertarTabla }