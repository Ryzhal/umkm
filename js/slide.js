
let slideIndex = 0;
let autoSlideInterval;

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    clearInterval(autoSlideInterval); // stop auto if manual clicked
    slideIndex += n;
    showSlides(slideIndex);
    autoSlide(); // restart auto
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000); // 4 detik
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    autoSlide();
});

// slider untuk produk

  const grid = document.querySelector('.product-grid');
  const btnNext = document.querySelector('.slider-btn.next');
  const btnPrev = document.querySelector('.slider-btn.prev');

  btnNext.addEventListener('click', () => {
    grid.scrollBy({ left: 300, behavior: 'smooth' });
  });

  btnPrev.addEventListener('click', () => {
    grid.scrollBy({ left: -300, behavior: 'smooth' });
  });



