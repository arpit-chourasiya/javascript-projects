/** @format */

const input = document.getElementById("input");

function reverseString(str) {
  return str.replace(/\s/g, "").toLowerCase().split("").reverse().join("");
}
function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value.replace(/\s/g, "").toLowerCase() === reverse) {
    alert("P A L I N D R O M E");
  } else {
    alert("Not today!");
  }

  input.value = "";
}
