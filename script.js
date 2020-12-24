const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("ul");
const list = document.querySelectorAll("li");
hamburger.addEventListener("click", () => {
  navigation.classList.toggle("visible");
  list.forEach((item) => {
    item.classList.toggle("list");
  });
});

const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.from(".hero .content", {
  opacity: 0,
  y: -50,
  duration: 1,
}).from(
  ".hero img",
  {
    opacity: 0,
    y: 50,
    duration: 1,
  },
  "-=1"
);

gsap.from(".products", {
  scrollTrigger: {
    trigger: ".products",
    start: "top bottom",
    ease: Power4.easeOut,
  },
  opacity: 0,
  x: -200,
  duration: 1.5,
});

gsap.from(".one .content", {
  scrollTrigger: {
    trigger: ".one",
    start: "top bottom",
    ease: Power4.easeOut,
  },
  opacity: 0,
  x: -200,
  duration: 2,
});

gsap.from(".two .content", {
  scrollTrigger: {
    trigger: ".two",
    start: "top bottom",
    ease: Power4.easeOut,
  },
  opacity: 0,
  x: 200,
  duration: 2,
});

gsap.from(".three .content", {
  scrollTrigger: {
    trigger: ".three",
    start: "top bottom",
    ease: Power4.easeOut,
  },
  opacity: 0,
  x: -200,
  duration: 2,
});
const tl2 = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl2.from(".about", {
  opacity: 0,
  y: -50,
  duration: 1,
});

const tl3 = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl3.from(".contact", {
  opacity: 0,
  x: -50,
  duration: 1,
});

//
