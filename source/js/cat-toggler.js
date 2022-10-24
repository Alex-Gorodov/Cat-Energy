const catContainer = document.querySelector('.example__image-container');
const catElements = document.querySelectorAll('.example__image-wrapper');
const catToggler = catContainer.querySelector('.example__image-toggler');
const catBefore = catContainer.querySelector('.example__image--before');
const catAfter = catContainer.querySelector('.example__image--after');
let mousePosition;
let alphaX = 0;
let isDown = false;
let isMouseOver = false;

catBefore.style.maxWidth = catContainer.clientWidth + 'px';
catAfter.style.maxWidth = catContainer.clientWidth + 'px';

const pushBtn = function(e) {
  isDown = true;
  alphaX = catToggler.offsetLeft - e.clientX;
};

catElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    isMouseOver = true;
  });
  element.addEventListener('mouseout', () => {
    isMouseOver = false;
  });
});

const moving = function(event) {
  event.preventDefault();
  if (isDown && isMouseOver) {
    mousePosition = event.clientX;
    catToggler.style.left = (mousePosition + alphaX) + 'px';
    catBefore.style.width = (mousePosition + alphaX) + 'px';
    catAfter.style.width = (-mousePosition + alphaX) + 'px';
  }
};

const unPushBtn = function() {
  isDown = false;
};

catContainer.addEventListener('mousedown', pushBtn, true);
catContainer.addEventListener('mouseup', unPushBtn, true);
document.addEventListener('mouseup', unPushBtn, true);
catContainer.addEventListener('mousemove', moving, true);

catContainer.addEventListener('touchstart', (event) => {
  isDown = true;
  alphaX = catToggler.offsetLeft - event.targetTouches[0].pageX;
}, true);

catContainer.addEventListener('touchmove', (event) => {
  event.stopImmediatePropagation();
  event.preventDefault();
  if (isDown && event.target.closest('.example__image-toggler')) {
    mousePosition = event.targetTouches[0].pageX;
    catToggler.style.left = (mousePosition + alphaX) + 'px';
    catBefore.style.width = (mousePosition + alphaX) + 'px';
    catAfter.style.width = (-mousePosition + alphaX) + 'px';
  }
}, false);

catContainer.addEventListener('touchend', () => {
  isDown = false;
}, true);
