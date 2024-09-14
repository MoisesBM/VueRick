// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import RickAndMorty from '../components/RickAndMorty.vue';
import InformacionEstudiante from '../components/InformacionEstudiante.vue';
import AppShop from '@/components/AppShop.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: RickAndMorty
  },
  {
    path: '/info',
    name: 'InformacionEstudiante',
    component: InformacionEstudiante
  },
  {
    path: '/shop',
    name: 'AppShop',
    component: AppShop
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
