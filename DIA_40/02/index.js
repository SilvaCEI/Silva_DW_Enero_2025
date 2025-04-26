<<<<<<< HEAD
let btn2Start = document.getElementById("btn2Start");
let btn2End = document.getElementById("btn2End");
let auto;

function ejer2Start(){
    auto = setInterval(() => alert("He esperado un ratico"), 5000)
}

function ejer2Stop(){
    clearInterval(auto);
}

btn2Start.addEventListener("click", ejer2Start);
btn2End.addEventListener("click", ejer2Stop);
=======
let btnStart = document.getElementById("btnStart");
let btnEnd = document.getElementById("btnEnd");
let auto;

function ejerStart() {
    auto = setInterval(() => alert("He esperado un retito"), 5000)
}

function ejerStop(){
    clearInterval(auto);
}

btnStart.addEventListener("click", ejerStart);
btnEnd.addEventListener("click", ejerStop);

//
>>>>>>> 1a53353b49ae036dca578cb5fa5452910ca73868
