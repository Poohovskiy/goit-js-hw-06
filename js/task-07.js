let inputRange = document.querySelector('#font-size-control');
let text = document.querySelector('#text');

document.addEventListener('DOMContentLoaded', function () {
  text.style.fontSize = `${inputRange.value}px`;
});

inputRange.addEventListener('input', onInputChange);

function onInputChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
