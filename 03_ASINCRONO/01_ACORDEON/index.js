'use strict'

// const bloque = document.querySelectorAll('.bloque')
// const h2 = document.querySelectorAll('.h2')

// // Cunado CLICK en h2,
// //QUITAR la clase activo de TODOS los bloques
// //Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// h2.forEach((cadaH2, i) => {
//     h2[i].addEventListener('click', () => {

//         bloque.forEach((cadaBloque, i) => {
//             bloque[i].classList.remove('activo')
//         })
//         bloque[i].classList.add('activo')

//     })
// })   



//----------OPTIMIZACION-------

const bloques = document.querySelectorAll('.bloque')
const titulos = document.querySelectorAll('.h2')

// Cunado CLICK en h2,
//QUITAR la clase activo de TODOS los bloques
//Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

titulos.forEach((titulo, i) => {
    titulo.addEventListener('click', () => {

        document.querySelector('.activo')?.classList.remove('activo');
        bloques[i].classList.add('activo');

    })
})   