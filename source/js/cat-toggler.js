const catToggler = document.querySelector('.example__image-toggler');
let mousePosition;
let offset = [0,0];
let isDown = false;
const catBefore = document.querySelector('.example__image--before');
const catAfter = document.querySelector('.example__image--after');

function parentWidth(elem) {
  return elem.parentElement.clientWidth;
}

catToggler.addEventListener('mousedown', function(e) {
  isDown = true;
  offset = [
    catToggler.offsetLeft - e.clientX
  ];
}, true);

document.addEventListener('mouseup', function() {
  isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
  event.preventDefault();
  if (isDown) {
      mousePosition = {

          x : event.clientX

      };
      catToggler.style.left = (mousePosition.x + offset[0]) + 'px';
      catBefore.style.aspectRatio = - (mousePosition.x + offset[0]);
      catAfter.style.aspectRatio = (mousePosition.x + offset[0]);
  }
}, true);
