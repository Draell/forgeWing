<script setup>
</script>

<template>
  <footer class="site-footer">
  <div class="footer-container">
    <div class="footer-brand">
      <h2>ForgeWingQC</h2>
      <p>Soluciones de calidad para la industria mecánica.</p>
    </div>

    <nav class="footer-nav">
      <ul>
        <li><a href="#intro">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#about">Sobre nosotros</a></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <div class="footer-social">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-x-twitter"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 ForgeWingQC. Todos los derechos reservados.</p>
  </div>
</footer>

</template>

<style scoped>
.footer-nav,
.footer-nav ul,
.footer-nav li,
.footer-nav a {
  background-color: transparent;
}


.site-footer {
  background-color: var(--color-Nav);
  color: #f0f0f0;
  padding: 3rem 1rem 1rem;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
}

.footer-nav li {
  margin-bottom: 0.5rem;
}

.footer-nav a {
  color: #ccc; /* o #f0f0f0 para más claridad */
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: var(--color-accent);
}


.footer-social a {
  margin-right: 1rem;
  color: #f0f0f0;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.footer-social a:hover {
  color: #00aaff;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #333;
  padding-top: 1rem;
  font-size: 0.8rem;
}

</style>
