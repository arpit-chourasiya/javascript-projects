/** @format */

// Get elements
const buttons = document.querySelectorAll("button");
let time = document.getElementById("time");

// Core variables
let seconds = 0;
let minutes = 0;
let interval = null;

// Add events to buttons
buttons.forEach((button) => {
  if (button.innerText === "Start") {
    button.addEventListener("click", startWatch);
  } else if (button.innerText === "Stop") {
    button.addEventListener("click", stopWatch);
  } else {
    button.addEventListener("click", resetWatch);
  }
});

// Start the stopwatch
function startWatch() {
  if (!interval) {
    interval = setInterval(updateTimer, 1000);
  }
}

// Stop the stopwatch
function stopWatch() {
  clearInterval(interval);
  interval = null;
}

// Reset the stopwatch
function resetWatch() {
  stopWatch();
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

// Update time every second
function updateTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  updateDisplay();
}

// Update the displayed time
function updateDisplay() {
  let minStr = minutes < 10 ? `0${minutes}` : minutes;
  let secStr = seconds < 10 ? `0${seconds}` : seconds;
  time.innerText = `${minStr}:${secStr}`;
}
