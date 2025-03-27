let input = document.getElementById("input");
let btn = document.getElementById("btn");
let name3 = localStorage.getItem("name")

function ejer3 (){
    localStorage.setItem("name", input.value)
}

btn.addEventListener("click", ejer3);

if(name3){
    alert(name3);
    input.value = name3;
}