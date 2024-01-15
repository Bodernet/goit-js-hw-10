import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = form.delay.value;
  const state = form.state.value;

  makePromise({ value: delay, delay: delay, state: state })
    .then(value =>
      iziToast.show({
        class: 'ok-circul',
        position: 'topRight',
        icon: 'ok-circul',
        message: `Fulfilled promise in ${delay} ms!`,
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
        message: `Rejected promise in ${delay} ms!`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#EF4040',
        close: false,
        closeOnClick: true,
      })
    );
  form.reset();
});

const makePromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    if (state === 'fulfilled' || state === 'rejected') {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(value);
        } else {
          reject(value);
        }
      }, delay);
    } else {
      reject('Invalid state value');
    }
  });
};

makePromise(2000, 'fulfilled')
  .then(value => {
    console.log(`Fulfilled promise in ${value} ms!`);
  })
  .catch(error => {
    console.error(`Rejected promise in ${error} ms!`);
  });
