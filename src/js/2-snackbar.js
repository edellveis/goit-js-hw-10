// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector('.input')
const fulfilledCheck = document.querySelector('input[value="fulfilled"]')
const rejectedCheckS = document.querySelector('input[value="rejected"]')
const createBtn = document.querySelector('.Create-btn')



createBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const inputTimeMs = Number(input.value);
    const promis = new Promise ((resolev, reject)=>{
        setTimeout(() => {
            if (fulfilledCheck.checked) {
                resolev(inputTimeMs)
            } else {
                reject(inputTimeMs)
            } 
        } ,inputTimeMs)
    });
    promis.then(inputTimeMs => {
        iziToast.show({
            title: `Fulfilled promise in ${inputTimeMs}ms`,
            color: 'green',
            position: 'topRight',
            progressBar: false,})
    
    }).catch(inputTimeMs=>{
       iziToast.show({
        title: `Rejected promise in ${inputTimeMs}ms`,
        color: 'red',
        position: 'topRight',
        progressBar: false,
       })
    }) 
    input.value = '';
});
