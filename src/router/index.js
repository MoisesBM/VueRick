// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import RickAndMorty from '../components/RickAndMorty.vue';
import InformacionEstudiante from '../components/InformacionEstudiante.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
