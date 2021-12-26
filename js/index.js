const d = document,
    date = new Date(),
    // con en objeto Date se ocupo para obtener la fecha actual, posteriormente se ocupara para sacar la edad del usuario que se registra.
    $date = d.getElementById("date"),
    $template = d.getElementById("template");
console.log(date.toLocaleDateString());
let birthday = "",
    // obtiene el dia 
    day = date.getDate(),
    // obtiene el mes, ya que es un arreglo se le suma uno porque enero empieza en la posicion 0
    month = date.getMonth() + 1,
    // obtiene el año
    year = date.getFullYear(),
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
    expreg2 =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9\s]+$/



//Esta funcion esta a la escucha de un cambio, en este caso cuando se haga un click.
d.addEventListener('click', (e) => {










    // Esta funcion esta condicionada si el click se origino en el tag que tiene el identificador enviar
    if (e.target.matches('#enviar')) {

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
             


        } else {
            if (!expreg.test($name.value) || !expreg.test($lastName.value) || !expreg.test($lastNamem.value) || !expreg2.test($direction.value)) {
            }
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
                
        }

        // Evita que se efectue la funcion que tiene por defecto los botones dentro de un form
        e.preventDefault();
        // Obtiene el valor que ingreso el usuario en la fecha
        birthday = $date.value;
        let dateBirthday = birthday.split('-'),
            bdayYear = parseInt(dateBirthday[0]),
            bdayMonth = parseInt(dateBirthday[1]),
            bdayDay = parseInt(dateBirthday[2]);




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