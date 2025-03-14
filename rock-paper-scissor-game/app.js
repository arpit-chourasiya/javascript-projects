/** @format */

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw 🔀";
};

const showWinner = (userWin) => {
  if (userWin) {
    console.log("Win");
    userScore++;
    userScoreP.innerText = userScore;
    msg.innerText = "You win 🎉";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreP.innerText = compScore;
    console.log("lose");
    msg.innerText = "You lose 😌";
  }
};
const playGame = (userChoice) => {
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
