import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import InformacionEstudiante from '@/components/InformacionEstudiante.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/InformacionEstudiante',
    name: 'InformacionEstudiante',
    component: InformacionEstudiante
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
