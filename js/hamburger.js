const overlay = document.querySelector('.overlay');
const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// burger functionality
function showMenu() {
  if (hamburgerButton.classList.contains('open')) {
    hamburgerButton.classList.remove('open');
    hamburgerMenu.classList.remove('open');
    overlay.classList.remove('fade_in');
    document.body.classList.remove('no-scroll');
  } else {
    hamburgerButton.classList.add('open');
    hamburgerMenu.classList.add('open');
    overlay.classList.add('fade_in');
    document.body.classList.add('no-scroll');
  }
}

hamburgerButton.addEventListener('click', showMenu);
overlay.addEventListener('click', () => {
  if (hamburgerButton.classList.contains('open')) showMenu();
});
