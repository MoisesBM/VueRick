// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import RickAndMorty from '../components/RickAndMorty.vue';
import InformacionEstudiante from '../components/InformacionEstudiante.vue';
import AppShop from '@/components/AppShop.vue';
import CharacterDetails from '@/components/CharacterDetails.vue';
import CatalogoVideojuegos from '@/components/CatalogoVideojuegos.vue';

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
    path: '/test',
    name: 'AppShop',
    component: AppShop
  },
  {  
    path: '/CharacterDetails',
    name: 'CharacterDetails',
    component: CharacterDetails
  },
  {
  path: '/CatalogoVideojuegos',
  name: 'CatalogoVideojuegos',
  component: CatalogoVideojuegos
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
