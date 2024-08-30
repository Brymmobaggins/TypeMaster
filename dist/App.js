/** @format */

import { sentenceArray } from "../src/data.js";

const gameSession = document.getElementById("game-section");
const startButton = document.getElementById("start-button");
const welComeScreen = document.getElementById("welcome-section");

startButton.addEventListener("click", function () {
  welComeScreen.classList.add("hidden");
  gameSession.classList.remove("hidden");

  displayRandomText();
});

function displayRandomText() {
  let currentSentenceIndex = 0;
  for (let i = 0; i < sentenceArray.length; i++) {
    document.getElementById("game-section").textContent = sentenceArray[i];
    currentSentenceIndex++;
  }
}

// displayRadomText()
