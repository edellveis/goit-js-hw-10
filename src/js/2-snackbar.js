import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = form.querySelector('input[name="delay"]');
const fulfilledCheck = form.querySelector('input[value="fulfilled"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = Number(event.target.delay.value);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fulfilledCheck.checked) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(delay => {
            iziToast.show({
                title: `Fulfilled promise in ${delay}ms`,
                color: 'green',
                position: 'topRight',
                progressBar: false,
            });
        })
        .catch(delay => {
            iziToast.show({
                title: `Rejected promise in ${delay}ms`,
                color: 'red',
                position: 'topRight',
                progressBar: false,
            });
        })
        .finally(() => {
            input.value = '';
        });
});
