let timerInterval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const millisecondsElement = document.querySelector(".milliseconds");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

function startTimer() {
  timerInterval = setInterval(() => {
    milliseconds += 10;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
    }
    updateTimer();
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTimer();
}

function updateTimer() {
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMilliseconds = milliseconds.toString().padStart(3, "0");
  minutesElement.textContent = formattedMinutes;
  secondsElement.textContent = formattedSeconds;
  millisecondsElement.textContent = formattedMilliseconds;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
