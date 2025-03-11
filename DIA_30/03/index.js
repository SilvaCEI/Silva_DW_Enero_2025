
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const op = document.getElementById("op")
const result = document.getElementById("result");

function handleCalculator() {
  const value1 = parseFloat(n1.value);
  const value2 = parseFloat(n2.value);
  let r;

  switch (op.value) {

    case "+":
      r = value1 + value2;
      break;
    case "-":
      r = value1 - value2;
      break;
    case "*":
      r = value1 * value2;
      break;
    case "/":
      r = value1 / value2;
      break;
      default:
        r = "Error";
        break;
  }
 result.innerHTML = r;
}