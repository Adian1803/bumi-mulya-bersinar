// ================= Slideshow Hero =================
const heroSlides = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg"];
let heroIndex = 0;
const heroSlideImg = document.getElementById("heroSlide");

function showHeroSlide(i) {
  heroIndex = (i + heroSlides.length) % heroSlides.length;
  heroSlideImg.src = heroSlides[heroIndex];
}
setInterval(() => showHeroSlide(heroIndex + 1), 4000);

// ================= Slideshow Galeri =================
const slides = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg", "images/foto4.jpg"];
let index = 0;
const slideshow = document.getElementById("slideshow");

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  slideshow.src = slides[index];
}
function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }
setInterval(nextSlide, 5000);
