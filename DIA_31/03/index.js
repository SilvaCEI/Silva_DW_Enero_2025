const button = document.getElementById("button");
const box = document.querySelectorAll(".box")

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} 

function getColor(){
  return `rgb(${getRndInteger(0,255)}, ${getRndInteger(0,255)}, ${getRndInteger(0,255)})`
}

function handleBoxChange(){
  box.forEach( box =>
    box.style.backgroundColor = getColor()
    
  );
}

button.addEventListener("click", handleBoxChange)