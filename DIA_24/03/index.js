const elem = document.getElementById("demo"); 
elem.innerHTML = "Hola Mundo";
elem.style.color = "red";


function changeColor(newColor){
    elem.style.color = newColor;
}

function changeSize(newSize){
    elem.style.fontSize = newSize;
}