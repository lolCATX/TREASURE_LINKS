document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.square-carousel .slide');
  const dots = document.querySelectorAll('.square-carousel .dot');
  let current = 0;
  const intervalTime = 3000; // 3 seconds per slide

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
  }

  function nextSlide() {
    const next = (current + 1) % slides.length;
    showSlide(next);
  }

  let timer = setInterval(nextSlide, intervalTime);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      showSlide(parseInt(dot.dataset.index));
      timer = setInterval(nextSlide, intervalTime);
    });
  });
});