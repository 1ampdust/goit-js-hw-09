let intervalId;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function startColorSwitch() {
  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  isStartButtonClicked = true;
}

function stopColorSwitch() {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
}
