let btn = document.getElementById("btn");


function ejer1 () {
    setTimeout(() => alert("He esperado un ratito"), 2000);
}

btn.addEventListener("click", ejer1)