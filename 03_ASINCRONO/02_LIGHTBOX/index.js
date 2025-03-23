'use strict'

// Constantes y variables 
const imgList = document.querySelectorAll(`.img`);
const lightbox = document.querySelector(`.lightbox`);
const grande = document.querySelector(`.grande`);
const close = document.querySelector(`.close`)

//Funciones
const closeBtnHandler = () => { lightbox.classList.remove(`isActive`)}
const imgListHandler = index=> {

    lightbox.classList.add(`isActive`);
    grande.src = imgList[index].src;

}
// Cuando hago CLICK en .img
// .lightbox se le ADD la clase inActive
// .grande añadirle el atributo SRC de la .img
imgList.forEach((eachImg, index) => {
    imgList[index].addEventListener(`pointerdown`, () => {

        lightbox.classList.add(`isActive`);
        grande.src = imgList[index].src;

    })

})

// Cuando hago CLICK en .close
// .lightbox se le REMOVE la clase isActive
close.addEventListener(`pointerdown`, closeBtnHandler)