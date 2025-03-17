const box = document.querySelector("#box");
const bt = document.querySelector("#bt2");
let flag = false;


function handleEjercicio4() {

    if (flag) {
        flag = false;
        box.style.animation = "animacion1 1s linear infinite"
    } else {
        flag = true;
        box.style.animation = "animacion2 1s linear infinite"
    }

}

bt.addEventListener("click", handleEjercicio4)