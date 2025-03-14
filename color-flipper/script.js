/** @format */

const body = document.getElementsByTagName("body")[0];
const button = document.querySelectorAll("button");

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}
button.forEach((btn) => {
  let color = btn.innerText;
  if (color == "Random") {
    btn.addEventListener("click", randomColor);
  } else {
    btn.addEventListener("click", () => {
      setColor(color);
    });
  }
});
