const d = document;

// Esta fue una de las funciones que me costaron mas trabajo porque creia que con un ciclo for me solucionaria el acomodar de mayor a menor pero investigue y tuve que agregar los datos de nombre y el promedio general en un arreglo.

function PromedioMasAlto() {
    // Aqui creo la ventana emergente
    const   $btnPromClass = d.querySelector('.btn-prom'),
            $background = d.createElement('section'),
            $seccionProm = d.createElement('section'),
            $btnClose = d.createElement('button'),
            $div = d.createElement('div'),
            $nombre = d.querySelectorAll('.nombre-completo'),
            $promedio = d.querySelectorAll('.promfinal'),
            $title = d.createElement('h2'),
            $divOrder = d.createElement('div'),
            arr = [];      
        let nombre = "",
            promedio = 0,
            i = 0,
            order = [];

        $btnPromClass.insertAdjacentElement('afterend',$background);
        $background.classList.add('sec-back');
        $background.appendChild($seccionProm);
        $seccionProm.classList.add('sec-prom');
        $seccionProm.appendChild($btnClose);
        $btnClose.classList.add('btn-close');
        $btnClose.insertAdjacentElement('afterend',$title);
        $title.innerText = 'Orden por Promedio';
        $title.style.textAlign = 'center';
        $seccionProm.appendChild($divOrder);

        
        
        for (let i = 0; i < $nombre.length; i++) {
            
            nombre = $nombre[i].outerText;
            promedio = parseFloat($promedio[i].outerText).toFixed(2);
            // aqui es donde agrego un arreglo en otro arreglo con la funcion push en cada iteracion
            arr.push([promedio,nombre]);
            
        }
        // Aqui investigue como ordenar y vi que el objeto Array tiene un metodo que se llama sort que te acomoda ascendentemente los valores, por eso ocupe el metodo reverse para lo que se requeria
        // http://www.w3bai.com/es/jsref/jsref_sort.html
        order = arr.sort().reverse();
        order.forEach(el => {
            let $list = d.createElement('p'),
            $subtitle = d.createElement('h5');

            $list.classList.add('text-center','text');
            $subtitle.classList.add('text-center','text');
            // console.log(i);
            // esta condicional la ocupe para agregar los titulos de Primer segundo y tercer lugar y solo se agregara una solo ves por la misma iteracion
            if(i === 0){
                $divOrder.appendChild($subtitle);
                $subtitle.classList.add('mt-4');
                $subtitle.innerText = `PRIMER LUGAR`
                $divOrder.appendChild($list);
                $list.innerText= `${el[1]} 
                ${el[0]}`
                
                
                
            }
            if(i === 1){
                $divOrder.appendChild($subtitle);
                $subtitle.innerText = `SEGUNDO LUGAR`
                $divOrder.appendChild($list);
                $list.innerText= `${el[1]} 
                ${el[0]}`

                
            }
            if(i === 2){
                $divOrder.appendChild($subtitle);
                $subtitle.innerText = `TERCER LUGAR`
                $divOrder.appendChild($list);
                $list.innerText= `${el[1]} 
                ${el[0]}`
                
                
            } 
            if(i===3) {
                $divOrder.appendChild($subtitle);
                $subtitle.innerText = `_________________________`
                $divOrder.appendChild($list);
                $list.innerText= `${el[1]} 
                ${el[0]}`

                
            }
            if(i>3) {
                $divOrder.appendChild($list);
                $list.innerText= `${el[1]}
                ${el[0]}`
                
            }
            
            
            i++
            
        });
        

        
        
    }
 
export { PromedioMasAlto}