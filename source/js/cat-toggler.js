const catContainer = document.querySelector('.example__image-container');
const catToggler = catContainer.querySelector('.example__image-toggler');
let mousePosition;
let offset = 0;
let isDown = false;
const catBefore = catContainer.querySelector('.example__image--before');
const catAfter = catContainer.querySelector('.example__image--after');

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
  offset = catToggler.offsetLeft - e.clientX;
};

const moving = function(event) {
  event.preventDefault();
  if (isDown) {
    mousePosition = event.clientX;
    catToggler.style.left = (mousePosition + offset) + 'px';
    catBefore.style.width = (mousePosition + offset) + 'px';
    catAfter.style.width = (-mousePosition + offset) + 'px';
  }
};

const unPushBtn = function() {
  isDown = false;
};

catToggler.addEventListener('mousedown', pushBtn, true);
document.addEventListener('mouseup', unPushBtn, true);
catContainer.addEventListener('mouseup', unPushBtn, true);
catContainer.addEventListener('mousemove', moving, true);

catContainer.addEventListener('touchstart', (event) => {
  isDown = true;
  console.log('start');
  offset = catToggler.offsetLeft - event.targetTouches[0].pageX;
}, true);

catContainer.addEventListener('touchmove', (event) => {
  // event.stopImmediatePropagation();
  event.preventDefault();
  if (isDown) {
    console.log('moves');
    mousePosition = event.targetTouches[0].pageX;
    catToggler.style.left = (mousePosition + offset) + 'px';
    catBefore.style.width = (mousePosition + offset) + 'px';
    catAfter.style.width = (-mousePosition + offset) + 'px';
  }
}, false);

catContainer.addEventListener('touchend', () => {
  console.log('end');
  isDown = false;
}, true);
