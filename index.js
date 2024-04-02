function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*carroussel*/
let slideIndex = 0;

function moveCarousel(n) {
const slides = document.querySelectorAll('.carousel-item');
slideIndex += n;
if (slideIndex >= slides.length) {
  slideIndex = 0;
} else if (slideIndex < 0) {
  slideIndex = slides.length - 1;
}
const slideWidth = slides[0].clientWidth;
const offset = -slideWidth * slideIndex;
document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
}

