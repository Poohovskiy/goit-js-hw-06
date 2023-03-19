const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
let inputValueEl = 'Anonymous';

inputEl.addEventListener('input', e => {
  outputEl.textContent = e.currentTarget.value === '' ? inputValueEl : e.currentTarget.value;
});
