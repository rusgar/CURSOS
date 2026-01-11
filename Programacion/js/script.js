let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;

// Actualizar número de diapositiva total
document.getElementById('totalSlides').textContent = totalSlides;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  
  if (n > totalSlides) {
    currentSlide = totalSlides;
  }
  if (n < 1) {
    currentSlide = 1;
  }
  
  // Ocultar todas las diapositivas
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Mostrar la diapositiva actual
  slides[currentSlide - 1].classList.add('active');
  
  // Actualizar número de diapositiva
  document.getElementById('currentSlide').textContent = currentSlide;
  
  // Deshabilitar botones en los extremos
  document.getElementById('prevBtn').disabled = currentSlide === 1;
  document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
}

function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    changeSlide(-1);
  } else if (e.key === 'ArrowRight') {
    changeSlide(1);
  }
});

// Función para imprimir/guardar como PDF
function printToPDF() {
  const slides = document.querySelectorAll('.slide');
  const navigation = document.querySelector('.navigation');
  const currentActiveSlide = currentSlide - 1;
  
  // Mostrar todas las diapositivas
  slides.forEach(slide => {
    slide.classList.add('active');
    slide.classList.add('printing');
  });
  
  // Ocultar navegación
  navigation.style.display = 'none';
  
  // Pequeña espera para que se renderice todo
  setTimeout(() => {
    window.print();
    
    // Restaurar después de cerrar el diálogo
    setTimeout(() => {
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        slide.classList.remove('printing');
        if (index === currentActiveSlide) {
          slide.classList.add('active');
        }
      });
      navigation.style.display = 'flex';
    }, 500);
  }, 300);
}

// Inicializar
showSlide(currentSlide);