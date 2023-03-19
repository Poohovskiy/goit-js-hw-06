function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const number = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const onInputClick = event => {
  const newDiv = Number(number.value);

  createBoxes(newDiv);
};

const createBoxes = amount => {
  const elements = [];

  const width = 30;
  const height = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');

    boxEl.style.backgroundColor = getRandomHexColor();

    boxEl.style.width = `${width + i * 10}px`;
    boxEl.style.height = `${height + i * 10}px`;

    elements.push(boxEl);
  }

  boxes.append(...elements);
};

const destroyBoxes = event => {
  boxes.innerHTML = '';
};

createBtn.addEventListener('click', onInputClick);
destroyBtn.addEventListener('click', destroyBoxes);