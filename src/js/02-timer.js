import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

btnStart.disabled = true;
let timerId = null;

Notiflix.Notify.init({
  width: '300px',
  position: 'center-top',
  closeButton: false,
});

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    try {
      const choosenDate = new Date(selectedDates[0]);

      if (choosenDate <= Date.now()) {
        throw new Error('Please choose a date in the future');
      }

      btnStart.disabled = false;
      inputDate.disabled = true;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      btnStart.disabled = true;
    }
  },
});

btnStart.addEventListener('click', onClickStart);

function onClickStart(event) {
  timerId = setInterval(() => {
    const choosenDate = new Date(inputDate.value);
    const timeToFinish = choosenDate - Date.now();

    updateTimeDisplay(timeToFinish);

    if (timeToFinish < 1000) {
      clearInterval(timerId);
      btnStart.disabled = true;
    }
  });
}

function updateTimeDisplay(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  btnStart.disabled = true;
  day.textContent = formatTimeComponent(days);
  hour.textContent = formatTimeComponent(hours);
  minute.textContent = formatTimeComponent(minutes);
  second.textContent = formatTimeComponent(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function formatTimeComponent(component) {
  return component < 10 ? '0' + component : component;
}
