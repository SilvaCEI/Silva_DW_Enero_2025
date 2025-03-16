function handleMoveMouse(e) {
  document.getElementById("clientX").innerHTML = e.clientX;
  document.getElementById("clientY").innerHTML = e.clientY;

  console.log(e.clientX, e.clientY)

}

window.addEventListener("mousemove", handleMoveMouse)

/*document.body.addEventListener("mousemove", handleMoveMouse)*/