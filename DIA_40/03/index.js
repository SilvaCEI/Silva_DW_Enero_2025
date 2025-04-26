<<<<<<< HEAD
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

=======
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
>>>>>>> 1a53353b49ae036dca578cb5fa5452910ca73868
