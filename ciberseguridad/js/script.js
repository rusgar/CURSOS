let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Actualizar número de diapositivas
document.getElementById('totalSlides').textContent = totalSlides;

function showSlide(n) {
  // Ocultar todas las diapositivas
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Ajustar el índice si está fuera de rango
  if (n >= totalSlides) {
    currentSlideIndex = totalSlides - 1;
  } else if (n < 0) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex = n;
  }

  // Mostrar la diapositiva actual
  slides[currentSlideIndex].classList.add('active');

  // Actualizar el número de diapositiva
  document.getElementById('currentSlide').textContent = currentSlideIndex + 1;

  // Actualizar botones
  updateButtons();
}

function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
}

function updateButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Deshabilitar botón anterior en la primera diapositiva
  if (currentSlideIndex === 0) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = '0.5';
  } else {
    prevBtn.disabled = false;
    prevBtn.style.opacity = '1';
  }

  // Deshabilitar botón siguiente en la última diapositiva
  if (currentSlideIndex === totalSlides - 1) {
    nextBtn.disabled = true;
    nextBtn.style.opacity = '0.5';
  } else {
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';
  }
}

// Navegación con teclado
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    changeSlide(-1);
  } else if (event.key === 'ArrowRight') {
    changeSlide(1);
  } else if (event.key === 'Home') {
    showSlide(0);
  } else if (event.key === 'End') {
    showSlide(totalSlides - 1);
  }
});

// Función para imprimir/PDF
function printToPDF() {
  window.print();
}

// Inicializar
showSlide(0);