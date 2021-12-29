const d = document;

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

export function insertarTabla($alumnos, $tbodyTwo) {
        
    let o = 0;
    for (let i = 0; i < $alumnos.length; i++) {
        
        let promedio = 0;
        let $tr = d.createElement('tr'),
        $th = d.createElement('th');
        $tbodyTwo.appendChild($tr);
        
        $tr.appendChild($th);
        $th.textContent = $alumnos[i].outerText;
        

        for (let i = 0; i < 5; i++) {
            let $th = d.createElement('th');
            $tr.appendChild($th);
            $th.classList.add(`promedio${o}`);
            $th.textContent = getRandomArbitrary(50,100);
        }
        
        for (let i = 0; i < 5; i++) {
            let $promedio = d.querySelectorAll(`.promedio${o}`);
            let prom = parseFloat($promedio[i].outerText);
            
            promedio += prom

        }
        
        let $thOne = d.createElement('th'),
        promedioOne = (promedio/5).toFixed(2)
        $tr.appendChild($thOne);
        $thOne.classList.add('promfinal')
        $thOne.textContent = promedioOne;

        
        o++;
        
    }

}


