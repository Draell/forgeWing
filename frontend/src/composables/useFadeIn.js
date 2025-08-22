import { onMounted } from 'vue';

export function useFadeIn(selector = '.fade-in') {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Solo una vez por elemento
        }
      });
    }, {
      threshold: 0.2 // Ajusta según el tamaño de tus secciones
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));
  });
}
