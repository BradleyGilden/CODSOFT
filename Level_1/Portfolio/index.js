document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const actions = {
    x: '-100vw',
    duration: 1,
    opacity: 0.1,
    ease: "power1.inOut",
  }
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".projectTrigger",
      scrub: 1,
      end: "bottom 70%",
    }
  })
  tl.from(".pro0", actions);
  tl.from(".pro1", actions);
  tl.from(".pro2", actions);
  tl.from(".pro3", actions);
});
