import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delayInput = form.delay.value;
  const state = form.state.value;

  makePromise({ value: delayInput, delay: delayInput, state: state })
    .then(value =>
      iziToast.show({
        class: 'ok-circul',
        position: 'topRight',
        icon: 'ok-circul',
        message: `Fulfilled promise in ${delayInput} ms!`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#59A10D',
        close: false,
        closeOnClick: true,
      })
    )
    .catch(error =>
      iziToast.show({
        class: 'error-circul',
        position: 'topRight',
        icon: 'error-circul',
        message: `Rejected promise in ${delayInput} ms!`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#EF4040',
        close: false,
        closeOnClick: true,
      })
    );
  form.reset();
});

const makePromise = ({ value, delay, state }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};
