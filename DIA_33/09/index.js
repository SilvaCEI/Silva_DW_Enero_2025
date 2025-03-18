function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor() {
    return `rgb(${getRndInteger(0, 255)}, ${getRndInteger(0, 255)}, ${getRndInteger(0, 255)})`
}


const box9 = document.querySelector(".box9")
const bt = document.querySelector("#bt2");



function handleEjercicio9() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    box9.style.position = "fixed";
    box9.style.left = `${getRndInteger(50, w - 150)}px`;
    box9.style.top = `${getRndInteger(50, h - 150)}px`;

}

bt.addEventListener("click", handleEjercicio9);


