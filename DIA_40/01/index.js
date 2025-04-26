let btn1 = document.getElementById("btn1");

function clickButton(){
setTimeout(() => alert("Hello world!"), 2000)
}

btn1.addEventListener("click", clickButton);