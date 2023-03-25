const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
let inputValueEl = 'Anonymous';

inputEl.addEventListener('input', e => {
  const trimmedValue = e.currentTarget.value.trim();
  outputEl.textContent = trimmedValue === '' ? inputValueEl : trimmedValue;
});

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
