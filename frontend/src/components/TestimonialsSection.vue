<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import { useFadeIn } from '@/composables/useFadeIn';
  
  useFadeIn();

const testimonials = [
  {
    name: 'Ana Martínez',
    role: 'CEO, TechNova',
    quote: 'ForgeWingQC transformó nuestra presencia en el mercado. Profesionalismo y diseño impecable.',
  },
  {
    name: 'Luis Torres',
    role: 'Freelancer',
    quote: 'El equipo entendió perfectamente lo que necesitaba. ¡100% recomendado!',
  },
  {
    name: 'María López',
    role: 'Prospector Novato',
    quote: 'La atención al detalle fue clave. Mi roca solo era Feldspar, pero es bueno saberlo.',
  },
  {
    name: 'Carlos Jiménez',
    role: 'Cazador de críptidos',
    quote: 'El diseño modular de sus trampas Oxberg me permitió casi capturar al Orang Pendek con mayor facilidad.',
  },
  {
    name: 'Sofía Herrera',
    role: 'Señora con dudas sobre el universo',
    quote: 'Con sus asesorías en criptozoología fui capaz de determinar con toda certeza que existe la posibilidad de que -tal vez- haya algo más ahi fuera.',
  },
]
</script>

<template>
  <section class="testimonials fade-in" id="testimonials">
    <h2>Testimonios</h2>
    <Swiper
      :modules="[EffectCoverflow, Pagination, Autoplay]"
      effect="coverflow"
      grabCursor="true"
      centeredSlides="true"
      slidesPerView="auto"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1.5,
        slideShadows: false
      }"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      speed="800"
      class="testimonial-swiper"
    >
      <SwiperSlide v-for="(t, index) in testimonials" :key="index" class="testimonial-slide">
        <div class="testimonial-card">
          <p class="quote">“{{ t.quote }}”</p>
          <p class="name">— {{ t.name }}, <span class="role">{{ t.role }}</span></p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.testimonials h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.testimonial-swiper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.testimonial-slide {
  width: 60%;
}

@media (max-width: 768px) {
  .testimonial-slide {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .testimonial-slide {
    width: 60%;
  }
}


.testimonial-card {
  min-height: 200px;
  height: auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.4s ease, opacity 0.4s ease;
  opacity: 0.6;
  transform: scale(0.9);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .testimonial-card {
    height: 220px;
  }
}


.swiper-slide-active .testimonial-card {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

}

.quote {
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.name {
  font-weight: bold;
}

.role {
  font-weight: normal;
  color: #666;
}
</style>
