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
        $seccionTableTwo.classList.add('table-sec','mt-5', 'text-center', 'table-sec-two');
        $seccionTableTwo.appendChild($title);
        $title.textContent = 'Tabla de calificaciones';
        
        $seccionTableTwo.appendChild($tableTwo);
        $tableTwo.classList.add('table');
        $tableTwo.appendChild($thead);
        $thead.classList.add('thead-one');
        // $thead.style.fontSize = '1rem';
        $thead.innerHTML = $headTable;
        $tableTwo.appendChild($tbodyTwo);
        $tbodyTwo.classList.add('tbody')
        return ($alumnos, $tbodyTwo)
}
