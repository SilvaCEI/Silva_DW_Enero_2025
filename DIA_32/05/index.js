const container5 = document.querySelector(".container5");

const bt5 = document.querySelector("#bt5");
let i5 = 0;
function handleAddBox5() {
  let count = document.querySelectorAll(".container5 .box").length + 1;
  i5++;
  let div = document.createElement("div");
  div.classList.add("box");
  div.innerHTML = count;
  container5.appendChild(div);

}

bt5.addEventListener("click", handleAddBox5)