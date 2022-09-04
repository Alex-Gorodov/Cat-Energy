let burgerButton = document.querySelector('.navigation-toggle');
let navList = document.querySelector('.navigation__list');

burgerButton.onclick = function () {
  burgerButton.classList.toggle('navigation-toggle--opened');
  navList.classList.toggle('navigation__list--opened');
}
