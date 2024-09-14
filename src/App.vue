<template>
  <div id="app">
    <RickAndMorty />
    <InformacionEstudiante />
  </div>
</template>


<script setup>
  import InformacionEstudiante from './components/InformacionEstudiante.vue';
  import RickAndMorty from './components/RickAndMorty.vue';
  import '@fortawesome/fontawesome-free/css/all.css';

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
