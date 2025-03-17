
const p1 = document.querySelector("#p1");
const bt = document.querySelector("#bt");


function handleEjercicio1(e){
    console.log("fondo:", p1.style.backgroundColor);
    console.log("color:", p1.style.color);
if(p1.style.backgroundColor != "black"){
    p1.style.backgroundColor = "black";
    p1.style.color = "white";
}else{
    p1.style.backgroundColor = "white"
    p1.style.color = "black";
}

}

bt.addEventListener("click", handleEjercicio1)


const box = document.querySelector("#box");
const bt2 = document.querySelector("#bt2");


function handleEjercicio2(e) {

    if (box.style.width == "70vw") {
        box.style.width = "20vw";
    } else {
        box.style.width = "70vw";
    }

}

bt2.addEventListener("click", handleEjercicio2)