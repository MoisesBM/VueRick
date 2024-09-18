<template>
    <div>
      <div id="catalog" class="catalog">
        <div v-for="game in games" :key="game.title" class="game-card">
          <img :src="game.image" :alt="game.title" class="game-image">
          <h2 class="game-title">{{ game.title }}</h2>
          <p class="game-description">{{ game.description }}</p>
          <p class="game-price">${{ game.price.toFixed(3) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const games = ref([]);
  
  const loadGames = async () => {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      games.value = data;
    } catch (error) {
      console.error('Error al cargar los juegos:', error);
    }
  };
  
  onMounted(() => {
    loadGames();
  });
  </script>
  <style scoped>
    .catalog {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        width: 90%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .game-card {
        border: #008ce4 5px solid;
        background-color: #fff;
        border-radius: 2rem;
        padding: 20px;
        text-align: center;
        box-shadow: 0px 8px 15px rgba(255, 0, 0, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
        width: 100%;
        box-sizing: border-box;
    }
    
    .game-card:hover {
        box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(-5px);
    }
    
    .game-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 15px;
    }
    
    .game-title {
        color: rgb(77, 104, 255);
        font-size: 1.2em;
        margin: 10px 0;
    }
    
    .game-description {
        font-size: 0.9em;
        color: #555;
        margin: 10px 0;
    }
    
    .game-price {
        font-size: 1.1em;
        color: #333;
        margin: 10px 0;
    }
    @media (max-width: 768px) {
  .catalog {
    grid-template-columns: repeat(2, 1fr);
  }
}
    @media (max-width: 599px) {
        .catalog {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        }
    }
    
    .menu-hamburger {
        display: flex;
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
    }
  </style>
  