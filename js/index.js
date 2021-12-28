import { crearTabla, insertarTabla } from "./insertar-tabla.js";
import { obtenerEdad } from "./obtener-edad.js";
import { obtenerMatricula } from "./obtener-matricula.js";


const d = document,
    date = new Date(),
    // con en objeto Date se ocupo para obtener la fecha actual, posteriormente se ocupara para sacar la edad del usuario que se registra.
    $date = d.getElementById("date"),
    $tbody = d.querySelector(".tbody"),
    $table = d.getElementById("table"),
    $seccionTable = d.getElementById("table-sec"),
    $regAlumnos = d.getElementById("regAlumnos");
   
    
    class Alumno {
       constructor(matricula, nombre, direccion, anios, grado, grupo){

           this.matricula = matricula,
           this.nombre= nombre,
           this.anios= anios,
           this.direccion= direccion,
           this.grado= grado,
           this.grupo= grupo
       } 
    }
    
    

let birthday = "",
    $name = d.getElementById('name'),
    $lastName = d.getElementById('last-name'),
    $lastNamem = d.getElementById('last-namem'),
    $direction = d.getElementById('direction'),
    $grade = d.getElementById('grado'),
    $group = d.getElementById('grupo'),
    $divName = d.getElementById('div-name'),
    $divLastName = d.getElementById('div-lastname'),
    $divLastNamem = d.getElementById('div-lastnamem'),
    $divDirection = d.getElementById('div-direction'),
    $divDate = d.getElementById('div-date'),
    expreg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    expreg2 =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9\s]+$/,
    dateToday = date.getTime(),
    $btnCali = d.createElement('button'),
    o = 0;
    
    

   
    //Esta funcion esta a la escucha de un cambio, en este caso cuando se haga un click.
    d.addEventListener('click', (e) => {
         
    // Esta funcion esta condicionada si el click se origino en el tag que tiene el identificador enviar
    if (e.target.matches('#enviar')) {
        birthday = $date.value;
        let dateone = birthday.split('-'),
        birthdayDay = new Date(dateone[0],dateone[1]-1,dateone[2]),
        dateTwo = birthdayDay.getTime();
        // Evita que se efectue la funcion que tiene por defecto los botones dentro de un form
        e.preventDefault();
        if (!$name.value || !$lastName.value || !$lastNamem.value || !$direction.value || !$date.value || $grade.value === "0" || $group.value === "0") {
            d.getElementById('enviar').setAttribute('disabled', '');
            if (!$name.value) {
                d.getElementById('ename').classList.remove('none');
                $name.setAttribute('required', '')

                let $warning = d.createElement('div');


                $divName.appendChild($warning)
                $warning.classList.add('warning');
                $warning.innerHTML = '<p>Ingresa tu nombre</p>';
            }
            if (!$lastName.value) {
                d.getElementById('elname').classList.remove('none');
                $lastName.setAttribute('required', '');

                let $warning = d.createElement('div');



                $warning.classList.add('warning');
                $divLastName.appendChild($warning);
                $warning.innerHTML = '<p>Ingresa tu Apellido Paterno</p>';
            }
            if (!$lastNamem.value) {
                d.getElementById('elnamem').classList.remove('none');
                $lastNamem.setAttribute('required', '');

                let $warning = d.createElement('div');


                $divLastNamem.appendChild($warning)
                $warning.classList.add('warning');
                $warning.innerHTML = '<p>Ingresa tu Apellido Materno</p>'
            }

            if (!$direction.value) {
                d.getElementById('edirection').classList.remove('none');
                $direction.setAttribute('required', '');

                let $warning = d.createElement('div');


                $divDirection.appendChild($warning)
                $warning.classList.add('warning');
                $warning.innerHTML = '<p>Ingresa tu Direccion</p>'
            }
            if (!$date.value) {
                e.preventDefault()
                $date.setAttribute('required', '');

                let $warning = d.createElement('div');
                $divDate.appendChild($warning)
                $warning.classList.add('warning');
                $warning.innerHTML = '<p>Ingresa una fecha</p>'


            }
            if ($grade.value === "0") {

                $grade.setAttribute('required', '');

                $grade.style.border = 'solid red';


            }
            if ($group.value === "0") {

                $group.setAttribute('required', '');

                $group.style.border = 'solid red';


            }
             


        } else if (!expreg.test($name.value) || !expreg.test($lastName.value) || !expreg.test($lastNamem.value) || !expreg2.test($direction.value) || dateToday < dateTwo) {
            
        
            if (!expreg.test($name.value)) {
                
                let $warningtext = d.createElement('div');

                $divName.appendChild($warningtext);
                $warningtext.classList.add('warning');
                $warningtext.innerHTML = '<p>Nombre sólo acepta letras y espacios en blanco</p>';
                
                setTimeout(() => {
                    $divName.removeChild($divName.lastChild);
                }, 4000);
                
               
            }
            if (!expreg.test($lastName.value)) {
                
                let $warningtext = d.createElement('div');

                $divLastName.appendChild($warningtext);
                $warningtext.classList.add('warning');
                $warningtext.innerHTML = '<p>Apellido Paterno sólo acepta letras y espacios en blanco</p>';
                
                setTimeout(() => {
                    $divLastName.removeChild($divLastName.lastChild);
                }, 4000);
                
                
            }
            if (!expreg.test($lastNamem.value)) {
                
                let $warningtext = d.createElement('div');

                $divLastNamem.appendChild($warningtext);
                $warningtext.classList.add('warning');
                $warningtext.innerHTML = '<p>Apellido Materno sólo acepta letras y espacios en blanco</p>';
                
                setTimeout(() => {
                    $divLastNamem.removeChild($divLastNamem.lastChild);
                }, 4000);
                
                
            }
            if (!expreg2.test($direction.value)){
                let $warningtext = d.createElement('div');

                $divDirection.appendChild($warningtext);
                $warningtext.classList.add('warning');
                $warningtext.innerHTML = '<p>Direccion sólo acepta letras, numeros y espacios en blanco</p>';
                
                setTimeout(() => {
                    $divDirection.removeChild($divDirection.lastChild);
                }, 4000);
            }
            if (dateToday < dateTwo) {
                let $warningtext = d.createElement('div');

                $divDate.appendChild($warningtext);
                $warningtext.classList.add('warning');
                $warningtext.innerHTML = '<p>No puedes ingresar una fecha mayor al día de hoy</p>';
                
                setTimeout(() => {
                    $divDate.removeChild($divDate.lastChild);
                }, 4000);
            }
            
        } else {
            let anios = obtenerEdad(dateToday, dateTwo),
            nombre = ($name.value).toUpperCase().trim(),
            apellidoPaterno = ($lastName.value).toUpperCase().trim(),
            apellidoMaterno = ($lastNamem.value).toUpperCase().trim(),
            direccion = ($direction.value).toUpperCase().trim(),
            grado = $grade.value,
            grupo = $group.value,
            matricula = obtenerMatricula(anios,nombre,apellidoPaterno,apellidoMaterno,direccion,grado,grupo),
            nombreCompleto = nombre.concat(' ',apellidoPaterno,' ',apellidoMaterno);

            $name.value = '';
            $lastName.value = '';
            $lastNamem.value = '';
            $direction.value = '';
            $date.value = '';
            $grade.value = '0';
            $group.value = '0';

            $regAlumnos.classList.remove('none');
            $table.classList.remove('none');
            
            // let arrayObject = [matricula,nombreCompleto,anios,direccion,grado,grupo]
            
            let registroAlumno = new Alumno();

            
            registroAlumno.matricula = matricula;
            registroAlumno.nombre = nombreCompleto;
            registroAlumno.anios = anios;
            registroAlumno.direccion = direccion;
            registroAlumno.grado = grado;
            registroAlumno.grupo = grupo;
            
            let $tr = d.createElement('tr');
            
            
            $tbody.appendChild($tr);
            
            for (const key in registroAlumno) {
                if (Object.hasOwnProperty.call(registroAlumno, key)) {
                    const element = registroAlumno[key];
                    

                    if (key === "nombre") {
                        let $td = d.createElement('td');
                        $tr.appendChild($td).textContent = element;
                        $td.classList.add('nombre-completo')
                    } else {

                        let $td = d.createElement('td');
                        $tr.appendChild($td).textContent = element;
                    }

                    

                }
            }


            $seccionTable.insertAdjacentElement('afterend',$btnCali);
            $btnCali.textContent = 'Ver Calificaciones';
            $btnCali.classList.add('btn-cali')
            
            



        }

        
        
        
        
        
    }

    if (e.target.matches(".btn-cali")) {
        const $tbodyTwo = d.createElement('tbody'),
        $alumnos = d.querySelectorAll('.nombre-completo');
        o++;
        if (o === 1) {
            
            crearTabla($btnCali,$tbodyTwo,$alumnos);
        }
        

        insertarTabla($alumnos,$tbodyTwo);
        
        


    }   
    
})





d.addEventListener('focusin', (e) => {
    if (e.target.matches('#name')) {

        if ($name.hasAttribute('required')) {
            $name.removeAttribute('required');
            $divName.removeChild($divName.lastElementChild);
            d.getElementById('ename').classList.add('none');

        }
    }
    if (e.target.matches('#last-name')) {
        if ($lastName.hasAttribute('required')) {
            $lastName.removeAttribute('required');
            $divLastName.removeChild($divLastName.lastElementChild);
            d.getElementById('elname').classList.add('none');

        }
    }
    if (e.target.matches('#last-namem')) {
        if ($lastNamem.hasAttribute('required')) {

            $lastNamem.removeAttribute('required');
            $divLastNamem.removeChild($divLastNamem.lastElementChild);
            d.getElementById('elnamem').classList.add('none');

        }
    }
    if (e.target.matches('#direction')) {
        if ($direction.hasAttribute('required')) {

            $direction.removeAttribute('required');
            $divDirection.removeChild($divDirection.lastElementChild);
            d.getElementById('edirection').classList.add('none');

        }
    }
    if (e.target.matches('#date')) {
        if ($date.hasAttribute('required')) {

            $date.removeAttribute('required');
            $divDate.removeChild($divDate.lastElementChild);


        }
    }

    if (e.target.matches('#grado')) {

        if ($grade.hasAttribute('required')) {

            $grade.removeAttribute('required');
            $grade.style.border = "solid 0.1px gray";


        }
    }
    if (e.target.matches('#grupo')) {

        if ($group.hasAttribute('required')) {

            $group.removeAttribute('required');
            $group.style.border = "solid 0.1px gray";


        }
    }




    if (!$name.hasAttribute('required') && !$lastName.hasAttribute('required') && !$lastNamem.hasAttribute('required') && !$direction.hasAttribute('required') && !$date.hasAttribute('required') && !$grade.hasAttribute('required') && !$group.hasAttribute('required')) {
        d.getElementById('enviar').removeAttribute('disabled');
    }
})