<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <div id="app">
    <AppNavegador />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppNavegador from './components/AppNavegador.vue';


export default defineComponent({
  name: 'App',
  components: {
    AppNavegador, 
  },
});
</script>

<style>
/* Estilo de imagen de fondo, se encuentra global - Moises */
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
      background-image: url('@/assets/rick.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: #333;
    }
</style>
