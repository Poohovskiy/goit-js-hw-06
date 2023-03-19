function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const page = document.body;
const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

const changeColor = event => {
  let resultColor = getRandomHexColor();
  page.style.backgroundColor = resultColor;
  color.textContent = resultColor;
};

button.addEventListener('click', changeColor);