<!-- src/views/Home.vue -->
<template>
    <MainLayout>
      <CatalogoVideojuegos />
    </MainLayout>
  </template>
  
  <script setup>
  import MainLayout from '../layouts/MainLayout.vue';
  import CatalogoVideojuegos from '@/components/CatalogoVideojuegos.vue';
  </script>
  
  <style scoped>
  </style>
  