import iziToast from "izitoast";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";
const currentDate = new Date();
let userSelectedDate = null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      if (selectedDate < currentDate) {
        iziToast.show({
          title: 'Please choose a date in the future',
          color: 'red',
          position: 'topRight',
          progressBar: false,
      });
        start.disabled = true;
      } else {
        userSelectedDate = selectedDate; 
        start.disabled = false; 
      }
    },
  };

flatpickr("#datetime-picker", options);




const input = document.getElementById('datetime-picker');
const start = document.querySelector('.btn-start');
const days = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const mins = document.querySelector('span[data-minutes]');
const sec = document.querySelector('span[data-seconds]');


start.disabled = true;
start.addEventListener('click', startTimer);


function startTimer () {
  input.disabled = true;
  start.disabled = true;
const userSelectedDateUnix = userSelectedDate.getTime();
const timer = setInterval(() => { 
 
  const currentDataUnix = new Date().getTime()
    const timeLeft = userSelectedDateUnix - currentDataUnix;
    const timeComponents = convertMs(timeLeft);
        days.textContent = addLeadingZero(timeComponents.days);
        hour.textContent = addLeadingZero(timeComponents.hours);
        mins.textContent = addLeadingZero(timeComponents.minutes);
        sec.textContent = addLeadingZero(timeComponents.seconds);
        if (timeLeft <= 0) {
          clearInterval(timer);
          input.disabled = false;
          start.disabled = false;
          clearInterval(timer);
          days.textContent = '00';
          hour.textContent = '00';
          mins.textContent = '00';
          sec.textContent = '00';
      }
}, 1000);

}





function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
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

