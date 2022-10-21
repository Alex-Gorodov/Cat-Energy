const catContainer = document.querySelector('.example__image-container');
const catToggler = catContainer.querySelector('.example__image-toggler');
const catBefore = catContainer.querySelector('.example__image--before');
const catAfter = catContainer.querySelector('.example__image--after');
let mousePosition;
let alphaX = 0;
let isDown = false;

if (window.innerWidth < 768) {
  catBefore.style.maxWidth = '280px';
  catAfter.style.maxWidth = '280px';
}
else {
  catBefore.style.maxWidth = '560px';
  catAfter.style.maxWidth = '560px';
}

const pushBtn = function(e) {
  isDown = true;
  alphaX = catToggler.offsetLeft - e.clientX;
};

const moving = function(event) {
  event.preventDefault();
  if (isDown) {
    mousePosition = event.clientX;
    catToggler.style.left = (mousePosition + alphaX) + 'px';
    catBefore.style.width = (mousePosition + alphaX) + 'px';
    catAfter.style.width = (-mousePosition + alphaX) + 'px';
  }
};

const unPushBtn = function() {
  isDown = false;
};

catToggler.addEventListener('mousedown', pushBtn, true);
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
