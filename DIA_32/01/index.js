
const box1 = document.querySelector(".box1");

const bt1 = document.querySelector("#bt1");

function handleToggleAnimate1() {
  box1.classList.add("animate1")
}

bt1.addEventListener("click", handleToggleAnimate1);