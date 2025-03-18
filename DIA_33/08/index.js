function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor() {
    return `rgb(${getRndInteger(0, 255)}, ${getRndInteger(0, 255)}, ${getRndInteger(0, 255)})`
}


let td = document.querySelectorAll(".table td")
const bt = document.querySelector("#bt2");



function handleEjercicio7() {
    let n = getRndInteger(0, td.length - 1)
    td[n].style.backgroundColor = "red";

}

bt.addEventListener("click", handleEjercicio7);


