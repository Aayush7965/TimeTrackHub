let timeRemainingTimeoutId;
let startTime;
let intervalId;
let canUseStartButton = 0;

const timeElement = document.querySelector(".passedTime");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");

startButton.addEventListener("click", startStopwatch);
resetButton.addEventListener("click", stopStopwatch);

function currentTime() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }

  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;

  let time = hh + ":" + mm + " " + session;

  document.querySelector("h1").innerHTML = time;
  let t = setTimeout(() => {
    currentTime();
  }, 1000);
}
currentTime();

function remainingTime() {
  let date = new Date();
  let nextMidnight = new Date(date);
  nextMidnight.setHours(24, 0, 0, 0);
  let timeDifference = nextMidnight - date;
  let hh = Math.floor(timeDifference / (1000 * 60 * 60));
  let mm = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  let time = hh + "h " + mm + "m";
  document.querySelector(".remainingTime").innerHTML = time;
  timeRemainingTimeoutId = setTimeout(() => {
    remainingTime();
  }, 1000);
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

function startStopwatch() {
  if (canUseStartButton == 0) {
    startButton.classList.add("disabled");
    remainingTime();
    if (!intervalId) {
      startTime = new Date();
      intervalId = setInterval(updateTimer, 1000);
    }
    canUseStartButton = 1;
    
  }
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
  document.querySelector(".passedTime").innerHTML = "00h 00m 00s";
}
