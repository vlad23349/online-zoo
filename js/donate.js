const inputNum = document.querySelector('.input-number');
const inputRadio = document.querySelectorAll('.progress-bar__radio');

// change border and value of input[number]
inputRadio.forEach((radioElem) => {
  radioElem.addEventListener('change', () => {
    selectRadio(radioElem);
  });
});

function selectRadio(radioElem) {
  inputNum.value = radioElem.value;
  inputNum.classList.add('change-border');
  setTimeout(() => {
    inputNum.classList.remove('change-border');
  }, 300);
  radioElem.checked = true;
}

// input[number] validation
inputNum.addEventListener('input', () => {
  if (inputNum.value.length > 4) {
    inputNum.value = inputNum.value.slice(0, 4);
  } else if (inputNum.value < 1) {
    inputNum.value = '';
  }
  inputRadio.forEach((radioElem) => {
    if (inputNum.value === radioElem.value) selectRadio(radioElem);
    else radioElem.checked = false;
  });
});
