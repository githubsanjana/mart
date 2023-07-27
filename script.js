const carouselSlide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.item');

let counter = 0;
const slideWidth = items[0].clientWidth;

function nextSlide() {
  if (counter >= items.length - 1) return;
  counter++;
  carouselSlide.style.transition = 'transform 0.5s ease';
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function prevSlide() {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transition = 'transform 0.5s ease';
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function automaticSlide() {
  if (counter >= items.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  carouselSlide.style.transition = 'transform 0.5s ease';
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

setInterval(automaticSlide, 1000);
