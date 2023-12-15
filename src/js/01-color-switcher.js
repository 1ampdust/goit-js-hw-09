let intervalId;

document
  .querySelector('[data-start]')
  .addEventListener('click', startColorSwitch);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopColorSwitch);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function startColorSwitch() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorSwitch() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
}
