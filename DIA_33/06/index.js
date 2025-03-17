const box = document.querySelector("#box");
const bt = document.querySelector("#bt2");



function handleEjercicio6() {

    if (box.style.opacity == 1 || box.style.opacity =="") {
       box.style.opacity = 0;
    } else {
        box.style.opacity = 1;
    }

}

bt.addEventListener("click", handleEjercicio6);