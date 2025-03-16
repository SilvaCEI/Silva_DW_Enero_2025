const container5 = document.querySelector(".container5");

const bt5 = document.querySelector("#bt5");
let i5 = 0;

function handleRemoveBox5(e) {
  e.target.remove()

}

function handleAddBox5() {
  let div = document.createElement("div");
  i5++;
  div.classList.add("box");
  div.innerHTML = i5;
  div.addEventListener("click", handleRemoveBox5)
  container5.appendChild(div);

}



bt5.addEventListener("click", handleAddBox5)