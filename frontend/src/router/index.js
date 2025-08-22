import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactPage from '../views/ContactPage.vue';
import OrderPage from '../views/OrderPage.vue';
import FreeTrial from '../components/freeTrial.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/place-order', name: 'PlaceOrder', component: OrderPage },
  { path: '/free-trial', name: 'FreeTrial', component: FreeTrial },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },

});

export default router;
