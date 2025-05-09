'use strict'

const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

//CLICK en li
//TODOS .li quitar la clase activo
//TODOS .bloque quitar la clase activo
// .li con la posición le añadimos la clase activo 
// .bloque con la posición le añadimos la clase activo 


//Recorriendo todos los LI
li.forEach( (cadaLI , i )=>{
    //Asignamos un CLICK a CADALI
    li[i].addEventListener('click',()=>{

        //Recorremos TODOS los .li
        li.forEach((cadaLi , i) => {
            //Quitamos la clase activo de cada li
            li[i].classList.remove('activo');
            //Quitamos la clase activo de cada bloque
            bloque[i].classList.remove('activo');
        })

        //En el li que hacemos click le añadimos la clase activo
        li[i].classList.add('activo')
        //En el bloque con la misma posición le añadimos la clase activo
        bloque[i].classList.add('activo')

    })

})