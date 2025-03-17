const box = document.querySelector("#box");
const bt = document.querySelector("#bt2");



function handleEjercicio5() {

    if (box.style.display == "none") {
       box.style.display = "block"
    } else {
        box.style.display = "none"
    }

}

bt.addEventListener("click", handleEjercicio5);