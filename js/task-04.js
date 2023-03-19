let counterValue = 0;

const valueEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const onIncrementBtnClick = e => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const onDecrementBtnClick = e => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', onIncrementBtnClick);
decrementBtnEl.addEventListener('click', onDecrementBtnClick);
