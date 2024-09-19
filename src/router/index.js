// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import RickInfo from '@/views/RickInfo.vue';
import AppShop from '@/components/AppShop.vue';
import RickEpisodes from '@/views/RickEpisodes.vue';
import HomeView from '@/views/HomeView.vue';
import RickInicio from '@/views/RickInicio.vue';


const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: RickInicio
  },
  {
    path: '/info',
    name: 'InformacionEstudiante',
    component: RickInfo
  },
  {
    path: '/test',
    name: 'AppShop',
    component: AppShop
  },
  {  
    path: '/CharacterDetails',
    name: 'CharacterDetails',
    component: RickEpisodes
  },
  {
  path: '/CatalogoVideojuegos',
  name: 'CatalogoVideojuegos',
  component: HomeView
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
