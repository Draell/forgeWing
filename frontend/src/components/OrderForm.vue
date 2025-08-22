<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  service: '',
  notes: '',
  file: null,
});

function handleFileUpload(event) {
  form.value.file = event.target.files[0];
}

function handleSubmit() {
  console.log('Formulario enviado:', form.value);
  //Enviar los datos a un backend o servicio de email
}
</script>

<template>
  <section id="order" class="order-section">
    <h2>Solicita tu pedido</h2>
    <form @submit.prevent="handleSubmit" class="order-form">
      <div class="form-group">
        <label for="name">Nombre completo</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="service">Tipo de servicio</label>
        <select id="service" v-model="form.service">
          <option disabled value="">Selecciona una opción</option>
          <option>Verificación de planos</option>
          <option>Certificación dimensional</option>
          <option>Otro</option>
        </select>
      </div>

      <div class="form-group">
        <label for="notes">Notas adicionales</label>
        <textarea id="notes" v-model="form.notes" rows="4" placeholder="Describe tu pedido..."></textarea>
      </div>

      <div class="form-group">
        <label for="file">Adjuntar archivo (PDF, imagen, etc.)</label>
        <input type="file" id="file" @change="handleFileUpload" accept=".pdf,.jpg,.png,.jpeg,.doc,.docx" />
      </div>

      <button type="submit" class="button-accent">Enviar pedido</button>
    </form>
  </section>
</template>


<style scoped>
.order-section {
  padding: 2rem;
  background-color: transparent;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
}

.order-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color: var(--color-text);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background-color: #fff;
  color: var(--color-text);
  box-sizing: border-box;

}

.button-accent {
  background-color: var(--color-accent);
  color: var(--color-bg);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.button-accent:hover {
  background-color: var(--color-accent-dark);
}
</style>
