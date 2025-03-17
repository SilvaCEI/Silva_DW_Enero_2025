function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor() {
    return `rgb(${getRndInteger(0, 255)}, ${getRndInteger(0, 255)}, ${getRndInteger(0, 255)})`
}


const td = document.querySelectorAll(".table td")
const bt = document.querySelector("#bt2");



function handleEjercicio7() {
        let n = getRndInteger(0, 15)
        td[n].style.backgroundColor = "red";

}

bt.addEventListener("click", handleEjercicio7);


