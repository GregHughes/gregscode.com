// Smooth Scroll
let scroll = new SmoothScroll('a[href*="#"]');

// Typed.js
let typed = new Typed("#typed-content", {
  strings: [
    "Let's do our best work...^200",
    "Let's do our best work together.",
  ],
  smartBackspace: true,
  startDelay: 1200,
  backDelay: 1000,
  typeSpeed: 23,
  backSpeed: 18,
});

// dynamic copyright date
let cr = document.getElementById("copyright");
let date = new Date().getFullYear();
cr.innerText = `\u00A9 2019-${date} Greg Hughes`;
