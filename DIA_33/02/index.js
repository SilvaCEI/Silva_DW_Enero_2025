const box = document.querySelector("#box");
const bt2 = document.querySelector("#bt");


function handleEjercicio2(e) {

    if (box.style.width == "70vw") {
        box.style.width = "20vw";
    } else {
        box.style.width = "70vw";
    }

}

bt2.addEventListener("click", handleEjercicio2)