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