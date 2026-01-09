let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");
  document.getElementById("currentSlide").textContent = currentSlide + 1;

  document.getElementById("prevBtn").disabled = currentSlide === 0;
  document.getElementById("nextBtn").disabled =
    currentSlide === totalSlides - 1;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Navegación con teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") changeSlide(-1);
  if (e.key === "ArrowRight") changeSlide(1);
});

// Inicializar
showSlide(0);
