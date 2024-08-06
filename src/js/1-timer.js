import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
flatpickr("#datetime-picker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i:ss",
    minDate: "today",
})
const input = document.getElementById('№datetime-picker')
