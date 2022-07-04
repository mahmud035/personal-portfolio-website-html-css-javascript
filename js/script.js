const header = document.querySelector('header');

//Navigation bar effects on scroll
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0);

  // INFO:The scrollY property returns the pixels a document has scrolled from the upper left corner of the window.
});
