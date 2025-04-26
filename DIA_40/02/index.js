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