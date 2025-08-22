<script setup>
import { useFadeIn } from '@/composables/useFadeIn';
  
  useFadeIn();
</script>

<template>
  <section class="about-section fade-in" id="about">
    <div class="about-card">
      <div class="about-content">
        <div class="about-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            En ForgeWingQC combinamos años experiencia en la industria de la maquinaria, con el conocimiento propio de prospectores del mas alto nivel. Todo esto con un enfoque criptozoológico que permite a nuestros clientes ensamblar trampas y jaulas para todo tipo de criaturas con los mas altos estándares de calidad.
          </p>
          <ul class="values">
            <li><span>⚙️</span> Control de calidad especializado.</li>
            <li><span>⛏️</span> Prospección de alto nivel.</li>
            <li><span>👽</span> Criptozoología y Ufología</li>
          </ul>
        </div>
        <div class="about-image">
          <img src="@/assets/team.jpg" alt="Equipo ForgeWingQC" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: #f9f9f9;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
}

.about-card {
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: none;
  margin: 0 1rem;
}


.about-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.about-text,
.about-image {
  width: 48%;
}

.about-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.about-text h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
}

.values li {
  font-size: 1rem;
  margin: 0.5rem 0;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-text,
  .about-image {
    width: 100%;
    text-align: center;
  }
}


</style>
