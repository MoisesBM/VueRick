<template>
  <div>

    <div class="catalog">
      <div v-if="games.length">
        <div v-for="(game, index) in games" :key="index" class="game-card">
          <img :src="game.image" :alt="game.title" class="game-image" />
          <h2 class="game-title">{{ game.title }}</h2>
          <p class="game-description">{{ game.description }}</p>
          <p class="game-price">\${{ game.price.toFixed(2) }}</p>
        </div>
      </div>
      <div v-else>
        <p>Cargando catálogo...</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    this.loadGames();
  },
  methods: {
    loadGames() {
      fetch("/data.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.games = data;
        })
        .catch((error) => {
          console.error("Error al cargar los juegos:", error);
        });
    },
  },
};
</script>

<style scoped>

.catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Ajuste para mostrar 4 columnas */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  box-sizing: border-box;
}

.game-card {
  border: 5px solid #67b5e6;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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

@media (max-width: 1200px) {
  .catalog {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas para pantallas medianas */
  }
}

@media (max-width: 900px) {
  .catalog {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas para pantallas pequeñas */
  }
}

@media (max-width: 600px) {
  .catalog {
    grid-template-columns: 1fr; /* 1 columna para pantallas móviles */
  }
}

</style>
