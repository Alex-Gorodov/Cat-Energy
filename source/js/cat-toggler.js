const catContainer = document.querySelector('.example__image-container');
const catToggler = catContainer.querySelector('.example__image-toggler');
let mousePosition;
let offset = 0;
let isDown = false;
const catBefore = catContainer.querySelector('.example__image--before');
const catAfter = catContainer.querySelector('.example__image--after');

const unPushBtn = function() {
  isDown = false;
};

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

catToggler.addEventListener('mousedown', pushBtn, true);
catToggler.addEventListener('touchstart', () => {
  pushBtn();
});

const moving = function(event) {
  event.preventDefault();
  if (isDown) {
    mousePosition = event.clientX;
    catToggler.style.left = (mousePosition + offset) + 'px';
    catBefore.style.width = (mousePosition + offset) + 'px';
    catAfter.style.width = (-mousePosition + offset) + 'px';
  }

};

document.addEventListener('mouseup', unPushBtn, true);
document.addEventListener('touchend', () => {
  unPushBtn();
});
catContainer.addEventListener('mouseup', unPushBtn, true);
catContainer.addEventListener('touchend', () => {
  unPushBtn();
});

catContainer.addEventListener('mousemove', moving, true);
catContainer.addEventListener('touchmove', () => {
  moving();
});
