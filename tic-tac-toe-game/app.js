/** @format */

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let winMsg = document.querySelector("#msg");

let turn0 = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const stopPlay = () => {
  boxes.forEach((box) => {
    box.disabled = true;

    winMsg.classList.remove("hide");
  });
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        winMsg.innerText = `Winner is Player${pos1}🎉`;
        stopPlay();
      }
    }
  }
};
const resetPlay = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    turn0 = true;
    box.disabled = false;
    winMsg.classList.add("hide");
  });
};
resetBtn.addEventListener("click", resetPlay);
