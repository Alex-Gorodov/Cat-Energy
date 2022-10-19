const catContainer = document.querySelector('.example__image-container');
const catToggler = document.querySelector('.example__image-toggler');
let mousePosition;
let offset = [0,0];
let isDown = false;
const catBefore = document.querySelector('.example__image--before');
const catAfter = document.querySelector('.example__image--after');

const pushBtn = function(e) {
  isDown = true;
  offset = [
    catToggler.offsetLeft - e.clientX
  ];
};

catToggler.addEventListener('mousedown', pushBtn, true);
catToggler.addEventListener('touchstart', () => {
  console.log('touched');
  pushBtn();
});

const unPushBtn = function() {
  isDown = false;
};


const moving = function(event) {
  event.preventDefault();
  if (isDown) {
    mousePosition = {

      x : event.clientX

    };
    catToggler.style.left = (mousePosition.x + offset[0]) + 'px';
    if (window.innerWidth < 768) {
      catBefore.style.maxWidth = '280px';
      catAfter.style.maxWidth = '280px';
    }

    if (window.innerWidth < 1440) {
      catBefore.style.maxWidth = '512px';
      catAfter.style.maxWidth = '512px';
    }
    catBefore.style.width = (mousePosition.x + offset[0]) + 'px';
    catAfter.style.width = (-mousePosition.x + offset[0]) + 'px';
  }
};

document.addEventListener('mouseup', unPushBtn, true);
document.addEventListener('untouchend', () => {
  console.log('touched');
  unPushBtn();
});

document.addEventListener('mousemove', moving, true);
document.addEventListener('touchmove', () => {
  console.log('moved');
  moving();
});
