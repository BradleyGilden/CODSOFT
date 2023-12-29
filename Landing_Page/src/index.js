document.addEventListener('DOMContentLoaded', () => {
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  pageDots: false,
  contain: true,
  prevNextButtons: false,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
  draggable: false,
  wrapAround: true,
  selectedAttraction: 0.01,
  friction: 0.20
});
})
