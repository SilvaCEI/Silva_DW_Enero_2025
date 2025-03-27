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