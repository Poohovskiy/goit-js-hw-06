let textInput = document.querySelector('#validation-input');

// console.log(textInput);

const onInputBlur = event => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
};

textInput.addEventListener('blur', onInputBlur);
