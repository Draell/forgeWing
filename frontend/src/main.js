import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './styles/global.css'
import './styles/transitions.css'

document.documentElement.style.scrollBehavior = 'smooth'


createApp(App).use(router).mount('#app');
