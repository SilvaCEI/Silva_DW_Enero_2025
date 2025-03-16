function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor() {
  return `rgb(${getRndInteger(0,255)}, ${getRndInteger(0,255)}, ${getRndInteger(0,255)})`;
}

function handleKeyDown(e) {
  e.target.style.backgroundColor = getColor();
}

function handleMouseEnter(e) {
  e.target.style.width = "200px";
  e.target.style.height = "600px";
}

function handleMouseLeave(e) {
  e.target.style.width = "100px";
  e.target.style.height = "100px";
}

const box = document.querySelector(".box");

const inp = document.querySelector(".inp")

// Eventos
inp.addEventListener("keydown", handleKeyDown);
box.addEventListener("mouseenter", handleMouseEnter);
box.addEventListener("mouseleave", handleMouseLeave);
