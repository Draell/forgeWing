<script setup>
  import { useFadeIn } from '@/composables/useFadeIn';
  
  useFadeIn();
</script>

<template>
  <section class="intro-section fade-in" id="intro">
    <div class="container">
      <h2 class="intro-title">Lo que hacemos</h2>
      <div class="text-columns">
        <div class="column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="column">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.intro-section {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  /*animation: fadeIn 1s ease-in;*/
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.intro-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

.text-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.column {
  flex: 1 1 45%;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

/* Responsive stacking */
@media (max-width: 768px) {
  .text-columns {
    flex-direction: column;
  }
}

/* Fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
