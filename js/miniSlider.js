const inputRange = document.querySelector('.range');
const comments = document.querySelector('.comments');

let inputRangeValue = 0;
let inputRangeSum = 0;
let changeValue = 298;

function checkWindowSize() {
  if (window.innerWidth < 1449) {
    changeValue = 323;
    inputRangeSum = -changeValue * inputRangeValue;
  } else {
    changeValue = 298;
    inputRangeSum = -changeValue * inputRangeValue;
  }
}

function moveSlider() {
  if (inputRangeValue > inputRange.value) {
    inputRangeSum += changeValue;
    comments.style.transform = `translateX(${inputRangeSum}px)`;
  } else {
    inputRangeSum -= changeValue;
    comments.style.transform = `translateX(${inputRangeSum}px)`;
  }
  inputRangeValue = inputRange.value;
}

inputRange.addEventListener('input', () => {
  checkWindowSize();
  moveSlider();
});

window.onresize = () => {
  checkWindowSize();
  comments.style.transform = `translateX(${inputRangeSum}px)`;
};
