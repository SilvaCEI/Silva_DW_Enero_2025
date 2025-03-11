const boxs = document.querySelectorAll(".box");
console.log(boxs)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function handleRandorizer() {
   boxs.forEach(box => {
    box.innerHTML = getRndInteger(1, 100)
    let r = getRndInteger(0, 255);
    let g = getRndInteger(0, 255);
    let b = getRndInteger(0, 255);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   }); 
}