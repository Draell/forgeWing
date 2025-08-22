<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <header class="navbar">
    <div class="logo-container">
    <img src="..//assets/FW2c.png" alt="Logo" class="logoA"></img>
    </div>
    <nav :class="{ open: isOpen }">
      <router-link :to="{ path: '/', hash: '#hero' }">Home</router-link>
      <router-link :to="{ path: '/', hash: '#services' }">Services</router-link>
      <router-link :to="{ path: '/', hash: '#about' }">About Us</router-link>
      <router-link to="/free-trial" class="big-button2">Free Trial</router-link>
      <router-link to="/place-order" class="big-button">Place Order</router-link>

    </nav>
    <button class="hamburger" @click="isOpen = !isOpen">
      ☰
    </button>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-Nav);
  color: #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.logo-container {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logoA {
  max-height: 100%;
  max-width: 140px; /* ajusta según tu diseño */
  object-fit: contain;
  display: block;

}


.logotext {
  font-weight: bold;
  font-size: 1.2rem;
  color: #f56e00;
}

nav {
  display: flex;
  gap: 1rem;
  background-color: var(--color-navbar-bg);
  color: var(--color-navbar-text);

}

nav a, nav router-link {
  text-decoration: none;
  color: #e0e0e0;
  padding: 0.5rem 1rem;
  background: #2a2a2a;
  border-radius: 6px;
  transition: background 0.3s ease;
}

nav a:hover, nav router-link:hover {
  background-color: var(--color-btn-accent);
  color: var(--color-bg);

}

.big-button {
  background-color: var(--color-accent); /* Ej: #ff5722 */
  color: white;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.5s;
}

.big-button:hover {
  background-color: var(--color-accent-dark); /* Ej: #e64a19 */
  transform: scale(1.05);
}

.big-button2 {
  background-color: #2a2a2a;
  color: var(--color-accent);
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.5s;
}

.big-button2:hover {
  background-color: var(--color-accent-dark); /* Ej: #e64a19 */
  transform: scale(1.05);
}

.hamburger {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #e0e0e0;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #1a1a1a;
    flex-direction: column;
    display: none;
    padding: 1rem 2rem;
  }

  nav.open {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}

</style>
