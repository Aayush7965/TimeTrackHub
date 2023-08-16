import { startStopwatch, stopStopwatch } from "./getStopwatch.js";
import { openFullScreen, closeFullScreen } from "./getFullScreen.js";

const startButton = document.querySelector(".start"); //start button
const resetButton = document.querySelector(".reset"); //stop button

function setStartButton() {
    startButton.addEventListener("click", addToStartButton); //start button
    function addToStartButton() {
        startStopwatch();
        openFullScreen();
    }
}

function setResetButton() {
    resetButton.addEventListener("click", addToResetButton); //stop button
    function addToResetButton() {
        stopStopwatch();
        closeFullScreen();
    }    
}

export {setStartButton, setResetButton, startButton};