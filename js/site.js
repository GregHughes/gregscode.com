// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');

// Typed.js
var typed = new Typed('#typed-content', {
    strings: ['The best preperation for tomorrow^700', '', 'Is doing your best today^700', '', 'Let\'s do our best work...^1800', 'Let\'s do our best work together^2000', ],
    smartBackspace: true,
    startDelay: 1000,
    backDelay: 1000,
    typeSpeed: 25,
    backSpeed: 20
  });

  // Particles.js
  particlesJS.load('particles-js', 'particles.json', function() {
  console.log("particles.js config loaded - Greg sure is great..."); });
