import {remainingTime, timeRemainingTimeoutId} from "./getRemainingTime.js";

let startTime;
let intervalId;
let canUseStartButton = 0;
const timeElement = document.querySelector(".passedTime"); //time will add 1 sec at a time
const startButton = document.querySelector(".start"); //start button
const resetButton = document.querySelector(".reset"); //stop button

startButton.addEventListener("click", startStopwatch); //start button
resetButton.addEventListener("click", stopStopwatch); //stop button

// Stop watch
function startStopwatch() {
  if (canUseStartButton === 0) {
    startButton.classList.add("disabled");
    remainingTime();
    if (!intervalId) {
      startTime = new Date();
      intervalId = setInterval(updateTimer, 1000);
    }
    canUseStartButton = 1;
  }
}

function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = currentTime - startTime;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const formattedTime = `${String(hours).padStart(2, "0")}h ${String(
    minutes
  ).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
  timeElement.textContent = formattedTime;
}

function stopStopwatch() {
  startButton.classList.remove("disabled");
  canUseStartButton = 0;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  clearTimeout(timeRemainingTimeoutId);
  document.querySelector(".remainingTime").innerHTML = "00h 00m";
  timeElement.innerHTML = "00h 00m 00s";
}

export { updateTimer, startStopwatch, stopStopwatch };
