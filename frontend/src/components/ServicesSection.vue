<script setup>
import iconCogs from '@/assets/icons/cogs.svg';
import iconRobot from '@/assets/icons/robot.svg';
import iconProsp from '@/assets/icons/prospect.png';
import iconEye from '@/assets/icons/eye.png';
import { useFadeIn } from '@/composables/useFadeIn';
  
  useFadeIn();

const services = [
  {
    title: 'Control de Calidad',
    description: 'Nos especializamos en inspección del mas alto nivel.',
    icon: iconCogs
  },
  {
    title: 'Inspección crítica',
    description: 'Te ayudamor a detectar y solucionar conflictos e irregularidades.',
    icon: iconRobot
  },
  {
    title: 'Prospección',
    description: 'Con años de experiencia en el ámbito prospector. Tenemos la experiencia para determinar si una roca es Feldspar o no.',
    icon: iconProsp
  },
  {
    title: 'Criptozoología',
    description: 'Somos expertos en asesoría de criaturas y manejamos ensamblado de trampas tipo Oxberg y Billy.',
    icon: iconEye
  }
];
</script>

<template>
  <section class="services fade-in" id="services">
    <h2>Nuestros Servicios</h2>
    <div class="grid">
      <div class="card" v-for="(service, index) in services" :key="index">
        <img :src="service.icon" :alt="service.title" />
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.services h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  justify-items: center;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 280px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.card img {
  width: 60px;
  margin-bottom: 15px;
}

.card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #222;
}

.card p {
  font-size: 1rem;
  color: #555;
}

@media (max-width: 768px) {
  .services h2 {
    font-size: 2rem;
  }

  .card {
    max-width: 100%;
  }
}
</style>
