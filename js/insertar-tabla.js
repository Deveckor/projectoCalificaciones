const d = document;

export function crearTabla($btnCali, $tbodyTwo, $alumnos) {
    const $seccionTableTwo = d.createElement('section'),
        $title = d.createElement('h3'),
        $tableTwo = d.createElement('table'),
        $thead = d.createElement('thead'),
        $headTable = `<tr>
        <th>Nombre Alumno</th>
        <th>Español</th>
        <th>Matematicas</th>
        <th>Ciencias Naturales</th>
        <th>Ingles</th>
        <th>Artes Visuales</th>
        <th>Promedio</th>
        </tr>`;
        
        $btnCali.insertAdjacentElement('afterend', $seccionTableTwo);
        $seccionTableTwo.classList.add('table-sec','mt-5', 'text-center');
        $seccionTableTwo.appendChild($title);
        $title.textContent = 'Tabla de calificaciones';
        
        $seccionTableTwo.appendChild($tableTwo);
        $tableTwo.classList.add('table');
        $tableTwo.appendChild($thead);
        $thead.classList.add('thead-one');
        // $thead.style.fontSize = '1rem';
        $thead.innerHTML = $headTable;
        $tableTwo.appendChild($tbodyTwo);
        return ($alumnos, $tbodyTwo)
}

export function insertarTabla($alumnos, $tbodyTwo) {

    for (let i = 0; i < $alumnos.length; i++) {

        let $tr = d.createElement('tr'),
        $th = d.createElement('th');

        $tbodyTwo.appendChild($tr);
        $tr.appendChild($th);
        
        
        $th.textContent = $alumnos[i].outerText;
        

        
        
    }
}

