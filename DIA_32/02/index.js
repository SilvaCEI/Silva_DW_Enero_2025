
const box1 = document.querySelector(".box1");

const bt1 = document.querySelector("#bt1");
const bt2 = document.querySelector("#bt2");

function handleAddAnimate1() {
  box1.classList.add("animate1")
}

function handleRemoveAnimate2() {
  box1.classList.remove("animate1")
}

bt1.addEventListener("click", handleAddAnimate1);
bt2.addEventListener("click", handleRemoveAnimate2);