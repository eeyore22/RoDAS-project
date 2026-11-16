'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('#examples-carousel');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (carousel && window.bulmaCarousel) {
    window.bulmaCarousel.attach(carousel, {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: false,
      infinite: false,
      autoplay: false,
      duration: reducedMotion ? 0 : 300,
      navigation: true,
      pagination: true
    });
    carousel.classList.add('is-initialized');
  }
  const button = document.querySelector('.scroll-to-top');
  if (button) {
    const update = () => button.classList.toggle('visible', window.scrollY > 300);
    window.addEventListener('scroll', update, {passive: true});
    button.addEventListener('click', () => window.scrollTo({top: 0, behavior: reducedMotion ? 'auto' : 'smooth'}));
    update();
  }
});
