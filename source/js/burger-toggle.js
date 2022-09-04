let burgerButton = document.querySelector('.navigation-toggle');
let navList = document.querySelector('.navigation__list');

burgerButton.onclick = function () {
  burgerButton.classList.toggle('navigation-toggle--opened');
  if (burgerButton.getAttribute('aria-label') === 'Открыть меню.') {
    burgerButton.setAttribute('aria-label', 'Закрыть меню.');
  } else {
    burgerButton.setAttribute('aria-label', 'Открыть меню.');
  }
  navList.classList.toggle('navigation__list--opened');
}
