gsap.registerPlugin(ScrollTrigger);

const contianer = document.querySelector(".container");
let q = gsap.utils.selector(contianer);
const panel = q(".panel");

console.log("parent display:", window.getComputedStyle(contianer.parentNode).display);

gsap.to(panel, {
  xPercent: -100 * (panel.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: contianer,
    pin: true,
    scrub: 1,
    snap: 1 / (panel.length - 1),
    start: "top top",
    //end: "+=" + contianer.offsetWidth
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500"
  }
});
/**/