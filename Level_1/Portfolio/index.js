document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".pro1", {
    scrollTrigger: ".pro1",
    x: '0',
    duration: 1,
    opacity: 1,
    ease: "power1.inOut"
  });
  gsap.to(".pro2", {
    scrollTrigger: ".pro2",
    x: '0',
    duration: 1,
    opacity: 1,
    ease: "power1.inOut"
  });
  gsap.to(".pro3", {
    scrollTrigger: ".pro3",
    x: '0',
    duration: 1,
    opacity: 1,
    ease: "power1.inOut"
  });
});
