document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
  document.querySelector('.spinner').style.display = 'none';
  document.getElementById('loadingText').textContent = 'Tap to enter';
}, 2000);

document.getElementById('loadingOverlay').addEventListener('click', () => {
  document.getElementById('bgMusic').play();
  document.getElementById('loadingOverlay').style.display = 'none';
});
  const slides = document.querySelectorAll('.square-carousel .slide');
  const dots = document.querySelectorAll('.square-carousel .dot');
  let current = 0;
  const intervalTime = 3000; 

  const radius = 200; 
  const angleStep = 360 / slides.length;
  slides.forEach((slide, i) => {
  slide.style.transform = `rotateY(${i * angleStep}deg) translateZ(${radius}px)`;
  });

  function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  current = index;
  

  const angleStep = 360 / slides.length;
  document.querySelector('.carousel-track').style.transform =
    `rotateY(${-index * angleStep}deg)`;
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