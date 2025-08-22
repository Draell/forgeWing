<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import OrderForm from '../components/OrderForm.vue';
</script>

<template>
  <main>
    <Navbar />

    <section class="order-page">
      <div class="order-wrapper">
        <!-- Instrucciones -->
        <aside class="instructions-box">
          <h2>FREE TRIAL</h2>
          <ul>
            <li>Fill out the following form.</li>
            <li>Upload your PDF blueprint file.</li>
            <li>One of our experts will review it and issue a quality certificate for you.</li>
            <li>The certificate will be sent to your e-mail within the next 72 hours.</li>
          </ul>
        </aside>

        <!-- Formulario -->
        <div class="form-box">
          <OrderForm />
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<style scoped>
.order-page {
  padding: 2rem;
  background-color: var(--color-surface);
  display: flex;
  justify-content: center;
}

.order-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1024px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
}

.instructions-box {
  flex: 1 1 300px;
  max-width: 320px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.instructions-box h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: var(--color-text);
}

.instructions-box ul {
  list-style: disc;
  padding-left: 1.2rem;
  color: var(--color-text);
}

.form-box {
  flex: 2 1 500px;
  max-width: 640px;
  padding: 1.5rem;
  background-color: #ffffff; /* 👈 Fondo blanco como el de instrucciones */
  border-radius: 12px;        /* 👈 Bordes redondeados iguales */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* 👈 Sombra suave */
  box-sizing: border-box;
}


/* 📱 Responsive: apilar en pantallas pequeñas */
@media (max-width: 768px) {
  .order-wrapper {
    flex-direction: column;
    align-items: stretch;
  }

  .instructions-box,
  .form-box {
    max-width: 100%;
    padding: 1rem;
  }
}
</style>
