<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
<main>
    <Navbar />

  <section class="contact-page">
    <h1>Contáctanos</h1>
    <h3>¿Tienes dudas, sugerencias o simplemente quieres saludar? Estamos aquí para escucharte.</h3>

    <form class="contact-form">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" placeholder="Tu nombre" />
      </div>

      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />
      </div>

      <div class="form-group">
        <label for="subject">Asunto</label>
        <input type="text" id="subject" placeholder="¿Sobre qué quieres hablar?" />
      </div>

      <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea id="message" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
      </div>

      <button type="submit">Enviar mensaje</button>
    </form>
  </section>

  <Footer />
  </main>
</template>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 1rem;
  color: #000000;
}

.contact-page h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #000000;
}

.contact-page h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.contact-page p {
  margin-bottom: 2rem;
  color: #000000;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: var(--color-bg);
  color: #000000;
}

button {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: var(--color-bg);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: var(--color-accent-dark);
}
</style>
