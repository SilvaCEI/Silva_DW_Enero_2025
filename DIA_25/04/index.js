function changeText() {
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;
    const text = document.getElementById("text").value;
    const p = document.getElementById("resultado");
    p.style.fontSize = size;
    p.style.color = color;
    p.innerHTML = text;
}