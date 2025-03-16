
const box1 = document.querySelector(".box1");

const bt1 = document.querySelector("#bt1");
const bt2 = document.querySelector("#bt2");
const bt3 = document.querySelector("#bt3");

function handleAddAnimate1() {
  box1.classList.add("animate1")
}

function handleRemoveAnimate2() {
  box1.classList.remove("animate1")
}

function handleRemoveAnimate3() {
  box1.classList.toggle("animate1")

}

bt1.addEventListener("click", handleAddAnimate1);
bt2.addEventListener("click", handleRemoveAnimate2);
bt3.addEventListener("click", handleRemoveAnimate3);