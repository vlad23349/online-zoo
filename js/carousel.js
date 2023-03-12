import { createCarouselBlock } from './cards.js';

const leftArrow = document.querySelector('.arrows__left');
const rightArrow = document.querySelector('.arrows__right');
const carousel = document.querySelector('.carousel');
let isEnd = true;

function hideSlide(direction) {
  const slide = document.querySelector('.carousel-block');
  isEnd = false;
  slide.classList.add(direction);

  slide.addEventListener('animationend', function () {
    carousel.removeChild(this);
  });
}

function showSlide(direction) {
  let nextSlide = createCarouselBlock();
  carousel.append(nextSlide);
  nextSlide.classList.add('next', direction);

  nextSlide.addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('show');
    isEnd = true;
  });
}

leftArrow.addEventListener('click', () => {
  if (isEnd) {
    hideSlide('to-right');
    showSlide('from-left');
  }
});

rightArrow.addEventListener('click', () => {
  if (isEnd) {
    hideSlide('to-left');
    showSlide('from-right');
  }
});
