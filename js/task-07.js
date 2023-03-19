let inputRange = document.querySelector('#font-size-control');
let text = document.querySelector('#text');

inputRange.addEventListener('input', onInputChange);
function onInputChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
