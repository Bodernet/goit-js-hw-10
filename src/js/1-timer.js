import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const timerRefs = {
  startBtn: document.querySelector('button[data-start]'),
  tDays: document.querySelector('span[data-days]'),
  tHours: document.querySelector('span[data-hours]'),
  tMinutes: document.querySelector('span[data-minutes]'),
  tSeconds: document.querySelector('span[data-seconds]'),
};
timerRefs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() > Date.now()) {
      userSelectedDate = selectedDates[0].getTime();

      timerRefs.startBtn.disabled = false;
      timerRefs.startBtn.classList.remove('disabled');
    } else {
      iziToast.show({
        class: 'error-circul',
        position: 'topRight',
        icon: 'error-circul',
        message: 'Please choose a date in the future!',
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#EF4040',
        close: false,
        closeOnClick: true,
      });

      timerRefs.startBtn.disabled = true;
      timerRefs.startBtn.classList.add('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

timerRefs.startBtn.addEventListener('click', elem => {
  const timer = setInterval(() => {
    const dif = userSelectedDate - Date.now();
    const tValue = convertMs(dif);
    if (dif <= 0) {
      clearInterval(timer);
    } else {
      timerRefs.tDays.textContent = addLeadingZero(tValue.days);
      timerRefs.tHours.textContent = addLeadingZero(tValue.hours);
      timerRefs.tMinutes.textContent = addLeadingZero(tValue.minutes);
      timerRefs.tSeconds.textContent = addLeadingZero(tValue.seconds);
    }
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  value = String(value);
  return value.length < 2 ? value.padStart(2, '0') : value;
}
