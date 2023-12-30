document.addEventListener("DOMContentLoaded", () => {
  const socials = document.querySelectorAll('.socials');
  const navItems = document.querySelectorAll('.nav-menu');
  const menu = document.getElementById('menu');
  const menuList = document.getElementById('menu-list');
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

  for (let item of navItems) {
    item.addEventListener('click', () => {
      console.log(item.dataset.id)
      gsap.to(window, { duration: 2, scrollTo: item.dataset.id, ease: 'power2' });
    })
  }

  menu.addEventListener('click', () => {
    if (menuList.classList.contains('hidden')) {
      menuList.classList.remove('hidden');
      menuList.classList.add('flex');
    }
    else if (menuList.classList.contains('flex')) {
      menuList.classList.remove('flex');
      menuList.classList.add('hidden');
    }
  })

});
