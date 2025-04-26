let input3 = document.getElementById("input3");
let btn3 = document.getElementById("btn3");
let name3 = localStorage.getItem("name");

function ejer3(){
    localStorage.setItem("name", input3.value)
}

btn3.addEventListener("click", ejer3);

if(name3){
    alert("Hola " + name3);
    input3.value = name3;
}

