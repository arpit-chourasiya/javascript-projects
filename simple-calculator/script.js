/** @format */
const input = document.getElementById("number-input");
const result = document.getElementById("result");
function handleClickBtn(el) {
  console.log(el.innerText);
  const exp = `${input.value}${el.innerText}`;
  input.value = exp;
  result.value = eval(exp);
}

function reset() {
  input.value = "";
  result.value = "";
}
