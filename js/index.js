// Tenia el conocimiento de hacer importaciones de modulos, al principio no me respondia porque en la etiqueta script no le habia creado el atributo type = module
import { crearTabla } from "./modules/crear-tabla.js";
import { insertarTabla } from "./modules/insertar-tabla.js";
import { obtenerEdad } from "./modules/obtener-edad.js";
import { obtenerMatricula } from "./modules/obtener-matricula.js";
import { PromedioMasAlto } from "./modules/promedio-alto.js";

// Aqui defini mis variables como constantes ya que el el curso del codigo no cambiaran.
const d = document,
    // con en objeto Date se ocupo para obtener la fecha actual, posteriormente se ocupara para sacar la edad del usuario que se registra.
    date = new Date(),
    // Busca un selector de tipo id en el archivo html, este es unos de los mejores metodos para el proposito ya que necesito agregar clases a ciertos elementos y solo seleccionandolos con id se puede lograr.
    $date = d.getElementById("date"),
    // busca cualquier selector que se especifica, en este caso es una clase.
    $tbody = d.querySelector(".tbody"),
    $table = d.getElementById("table"),
    $seccionTable = d.getElementById("table-sec"),
    $regAlumnos = d.getElementById("regAlumnos");
   
    // Quise ocupar una clase para practicar unos conocimientos previos, creo que pude haber ocupado un objeto para este proposito, pero en la funcion que quise ocupar sirvio bien para hacer una instancia de esta clase
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
    
    
// aqui defini mis variables como let ya que en el curso del programa iran cambiando.
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
    // Aqui ocupe una expreción regular que solo incluye letras, y espacios en blanco.
    expreg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    // Aqui ocupe una expreción regular que solo incluye letras, espacios en blanco y numeros.
    expreg2 =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9\s]+$/,
    // Esta funcion sirve para obtener el tiempo actual en milisegundos desde la fecha cero.
    dateToday = date.getTime(),
    // Aqui cree un boton con la funcion createElement
    $btnCali = d.createElement('button'),
    $ultimo = d.getElementById('ultimo'),
    o = 0;
    
    

   
    //Esta funcion esta a la escucha de un cambio, en este caso cuando se haga un click.
    d.addEventListener('click', (e) => {
         
    // Esta funcion esta condicionada si el click se origino en el tag que tiene el identificador enviar
    if (e.target.matches('#enviar')) {
        // Aqui estoy obteniendo el valor que tiene el input date
        birthday = $date.value;
        //Lo estoy separando el valor que viene con un guion para que me devuelva un arreglo.
        let dateone = birthday.split('-'),
        // Aqui estoy creando el dato que obtuve del input a un dato Date pasando el parametro del arreglo.
        birthdayDay = new Date(dateone[0],dateone[1]-1,dateone[2]),
        // Aqui quise obtener la fecha que ingresa el usuario para convertirlo en milisegundos.
        dateTwo = birthdayDay.getTime();
        // Evita que se efectue la funcion que tiene por defecto los botones dentro de un form
        e.preventDefault();
        // En esta condicion estoy validando que los datos no vengan vacios
        if (!$name.value || !$lastName.value || !$lastNamem.value || !$direction.value || !$date.value || $grade.value === "0" || $group.value === "0") {
            // Aqui estoy agregando un atributo al id enviar para que el boton se desactive
            d.getElementById('enviar').setAttribute('disabled', '');
            // Estas condiciones se estan haciendo por cada input para que dinamicamente agregue o quite ciertos atributos u elementos.
            if (!$name.value) {
                // Aqui se remueve en el id ename la clase none para que se apliquen los estilos del sass.
                d.getElementById('ename').classList.remove('none');
                // Aqui se agrega el atributo required de los input
                $name.setAttribute('required', '')
                // Se crea elemento div para mandar un error de que no se ingresaron los datos.
                let $warning = d.createElement('div');


                $divName.appendChild($warning)
                // Se agrega una clase para que se apliquen estilos de sass.
                $warning.classList.add('warning');
                // Con innerHTML se agrega un texto con el formato html que se especifica.
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
             

            // En esta condicional es donde se valida que los datos en su caso sean puras letras y no se incluyan numeros en algunos input, en otras simbolos especiales, y tambien condiciona que que la fecha ingresada no sea igual mayor que el dia de hoy
        } else if (!expreg.test($name.value) || !expreg.test($lastName.value) || !expreg.test($lastNamem.value) || !expreg2.test($direction.value) || dateToday <= dateTwo) {
            
        
            if (!expreg.test($name.value)) {
                
                let $warningtext = d.createElement('div');

                $divName.appendChild($warningtext);
                $warningtext.classList.add('warning');
                $warningtext.innerHTML = '<p>Nombre sólo acepta letras y espacios en blanco</p>';
                // Este es un temporizador que me sirvio para que el mensaje al usuario tenga solo una vida de 4 seg. y se elimine el elemento creado
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
            
                
                
            // Aqui estoy obteniendo los valores ingresados en el form.
            // En esta variable ejecuto la funcion obtenerEdad para tener los años.
            let anios = obtenerEdad(dateToday, dateTwo),
            // Les aplico la funcion toUpperCase y trim para volver los datos en mayusculas y quitarles espacios.
            nombre = ($name.value).toUpperCase().trim(),
            apellidoPaterno = ($lastName.value).toUpperCase().trim(),
            apellidoMaterno = ($lastNamem.value).toUpperCase().trim(),
            direccion = ($direction.value).toUpperCase().trim(),
            grado = $grade.value,
            grupo = $group.value,
            // Ejecuto la funcion obtener matricula
            matricula = obtenerMatricula(anios,nombre,apellidoPaterno,apellidoMaterno,direccion,grado,grupo),
            // Ejecuto la funcion concat para juntar nombre apellido paterno y materno en una sola variable.
            nombreCompleto = nombre.concat(' ',apellidoPaterno,' ',apellidoMaterno);

            // Aqui elimino de los input los datos para que queden vacios para el siguiente alumno
            $name.value = '';
            $lastName.value = '';
            $lastNamem.value = '';
            $direction.value = '';
            $date.value = '';
            $grade.value = '0';
            $group.value = '0';

            // Aqui le quito la clase none ya que en el html original si estan los elementos solo que ocultos.
            $regAlumnos.classList.remove('none');
            $table.classList.remove('none');
            
            // let arrayObject = [matricula,nombreCompleto,anios,direccion,grado,grupo]
            
            // aqui agrege los datos a la clase Alumnos para que cuando se agreguen una y otra ves sea una instancia nueva de la clase Alunmos.
            let registroAlumno = new Alumno();

            // Agrego los valores de las variables que obtuve de los inputs
            registroAlumno.matricula = matricula;
            registroAlumno.nombre = nombreCompleto;
            registroAlumno.anios = anios;
            registroAlumno.direccion = direccion;
            registroAlumno.grado = grado;
            registroAlumno.grupo = grupo;
            
            // Aqui aprendi que las variables de elementos que creo es importante donde las definas. ya que como es una tableroz necesitaba solo una por alumno y al ponerla dentro del ciclo me hacia una fila por cada iteracion que hacia el for.
            let $tr = d.createElement('tr');
            
            // appendChild sirve para agregar un hijo el elemento que seleccionas antes.
            $tbody.appendChild($tr);
            
            // Aqui ocupe un forin para recorrer la clase ya que es un objeto, el key es el valor del registroAlumnos
            for (const key in registroAlumno) {
                // Esta condicion es para saber si existe la propiedad en el objeto y si exite la llama
                if (Object.hasOwnProperty.call(registroAlumno, key)) {
                    // Aqui asigno el valor de cada llave al elemento en cada iteracion
                    const element = registroAlumno[key];
                    
                    // Esta condicion me sirvio bastante para solo agregar la clase nombre-completo a nombre para ocuparlo en la siguiente tabla ese valor.
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

            // Aqui ocupe la funcion in insertAdjacentElement afterend ya que agrega un hermano siguiente. Estoy agregando el boton Ver calificaciones
            $seccionTable.insertAdjacentElement('afterend',$btnCali);
            $btnCali.textContent = 'Ver Calificaciones';
            $btnCali.classList.add('btnStyle','btn-cali');
            // Esta funcion la investige en MDN ya que al agregar las tablas se iban creando y se mantenia la pantalla estatica, esta funcion me sirvio para recorrer el viewport al final y que se viera los datos nuevos creados.
            $ultimo.scrollIntoView({block: 'end'});
            



        }

        
        
        
        
        
    }
    // Aqui hago la condicion de que el click se origine en el boton ver calificaciones
    if (e.target.matches(".btn-cali")) {
        const $tbodyTwo = d.createElement('tbody'),
        // Aqui estoy ocupando querySelectorAll para que selecione todos los elementos que tienen la clase nombre-completo y asi obtener el valor de esos.
        $alumnos = d.querySelectorAll('.nombre-completo');
        

        
        
        o++;
        // esta condicion la agrege porque me di cuenta que cada vez que se le daba click al boton ver calificaciones me agregaba una nueba tabla, y asi solo funciona con un click.
        if (o === 1) {
            
           crearTabla($btnCali,$tbodyTwo);
           const $tableTwo = d.querySelector('.table-sec-two'),
           $btnProm = d.createElement('button');
   
           $btnProm.classList.add('btnStyle' , 'btn-prom');
           $btnProm.textContent = 'Ordenar Promedio';
           $tableTwo.insertAdjacentElement('afterend',$btnProm);
        }
        

        insertarTabla($alumnos,$tbodyTwo);

        $ultimo.scrollIntoView({block: 'end'});

    }   
    // Aqui hago la condicion de que el click se origine en el boton promedio.
    if (e.target.matches(".btn-prom")) {
        
        

        PromedioMasAlto();


    }
    if(e.target.matches(".btn-close")){
        // Esta funcion del objeto window me permite recargar la pagina al finalizar el programa, se lo asigne al boton cerrar
        window.location.reload();
    }
})




// Este escuchador de eventos me sirvio para eliminar los mensajes de error cuando el usuario seleccione los input.
d.addEventListener('focusin', (e) => {
    if (e.target.matches('#name')) {
        // Aqui condiciono que si el elemento tiene el atributo required siga las siguientes instrucciones.
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



    // Aqui condiciono que si los input no tienen el atributo required, se elimine el atributo disable del boton agregar.
    if (!$name.hasAttribute('required') && !$lastName.hasAttribute('required') && !$lastNamem.hasAttribute('required') && !$direction.hasAttribute('required') && !$date.hasAttribute('required') && !$grade.hasAttribute('required') && !$group.hasAttribute('required')) {
        d.getElementById('enviar').removeAttribute('disabled');
    }
})