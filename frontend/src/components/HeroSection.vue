<script setup>

</script>

<template>
  <section class="hero-parallax" id="hero">
    <div class="overlay">
      <div class="content">
        <h1>ForgeWing <br></br> Quality Control</h1>
        <p>High level quality control for your business.</p>

        <router-link to="/contact">
          <button>Contáctanos</button>
        </router-link>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-parallax {
  position: relative;
  height: 60vh;
  min-height: 400px;
  background-image: url('@/assets/hero-bg.jpg'); /* 🌄 Fondo con parallax */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
  color: white;
  padding: 0 20px;
  max-width: 600px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--color-accent-dark);
}

/* 📱 Responsividad */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }

  button {
    width: 100%;
    font-size: 1rem;
  }

  .content {
    padding: 0 10px;
  }
}
</style>
