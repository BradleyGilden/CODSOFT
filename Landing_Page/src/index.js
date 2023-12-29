document.addEventListener("DOMContentLoaded", () => {
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    pageDots: false,
    contain: true,
    prevNextButtons: false,
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    draggable: false,
    wrapAround: true,
    selectedAttraction: 0.01,
    friction: 0.2,
  });

  const socials = document.querySelectorAll('.socials');

  for (let social of socials) {
    social.addEventListener('mouseover', () => {
      let source = social.src;
      source = source.replace("b8bbb9", "f0c000");
      social.src = source;
    })
    social.addEventListener('mouseout', () => {
      let source = social.src;
      source = source.replace("f0c000", "b8bbb9");
      social.src = source;
    })
  }
});
