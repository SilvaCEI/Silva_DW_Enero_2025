function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor() {
    return `rgb(${getRndInteger(0, 255)}, ${getRndInteger(0, 255)}, ${getRndInteger(0, 255)})`
}


const td8 = document.querySelectorAll(".table td")
const bt = document.querySelector("#bt2");



function handleEjercicio7() {
    const tds = Array.from(td8).filter(el => el.style.backgroundColor != 'red')
    console.log(tds)
    const n = getRndInteger(0, tds.length - 1)
    tds[n].style.backgroundColor = "red";

}

bt.addEventListener("click", handleEjercicio7);


