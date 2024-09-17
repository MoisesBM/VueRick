<!-- src/layouts/MainLayout.vue -->
<template>
    <div>
      <header>
        <h1>My Vue App</h1>
      </header>
      <main>
        <slot></slot> <!-- Aquí se renderizan los componentes hijos -->
      </main>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>

  </style>
  