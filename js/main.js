// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
    toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      mobileNav.hidden = true;
    });
  });
})();

// Image slideshow
(function () {
  var root = document.getElementById('slideshow');
  if (!root) return;

  var slides = Array.prototype.slice.call(root.querySelectorAll('.slide'));
  var prevBtn = root.querySelector('.prev');
  var nextBtn = root.querySelector('.next');
  var current = 0;

  function show(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slides.forEach(function (slide) {
      slide.classList.remove('is-active');
    });
    slides[index].classList.add('is-active');
    current = index;
  }

  prevBtn.addEventListener('click', function () {
    show(current - 1);
  });
  nextBtn.addEventListener('click', function () {
    show(current + 1);
  });
})();
