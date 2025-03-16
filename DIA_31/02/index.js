function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} 

function getColor(){
  return `rgb(${getRndInteger(0,255)}, ${getRndInteger(0,255)}, ${getRndInteger(0,255)})`
}

const buttons = document.querySelectorAll(".buttonChanger");

function handleBgChange(e) {
  console.log(e)
  e.target.style.backgroundColor = getColor();
   
}

buttons.forEach(button => {
  button.addEventListener("click", handleBgChange)
 }); 