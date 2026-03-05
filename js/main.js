// ══════════════════════════════════════════════════════════════
//  GUARDIÁN – Main: inicialización y animaciones de scroll
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // Inicializar checklist
  initChecklist();

  // Animación de entrada por scroll (Intersection Observer)
  const cards = document.querySelectorAll('.section-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Pequeño delay escalonado por posición
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 60 * getCardIndex(entry.target, cards));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  cards.forEach(card => observer.observe(card));

  // Abre la primera sección automáticamente
  setTimeout(() => {
    const first = document.querySelector('.section-card');
    if (first) first.classList.add('open');
  }, 600);

  // Voces de TTS: carga asíncrona en algunos navegadores
  if (window.speechSynthesis) {
    speechSynthesis.onvoiceschanged = () => {
      // Las voces están disponibles
    };
  }
});

function getCardIndex(card, allCards) {
  return Array.from(allCards).indexOf(card);
}

// Manejo global de tecla Escape para cerrar chat
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && chatOpen) toggleChat();
});
