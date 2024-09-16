<template>
    <div>
      
      <main>
        <section id="characterDetails">
          <h1>{{ character.name }}</h1>
          <img :src="character.image" alt="Character Image" />
          <p><strong>Estado:</strong> {{ character.status }}</p>
          <p><strong>Género:</strong> {{ character.gender }}</p>
          <p><strong>Especie:</strong> {{ character.species }}</p>
        </section>
  
        <section id="capsDetails">
          <h2>Episodios</h2>
          <ul class="columnaslink">
            <li v-for="(episode, index) in character.episode" :key="episode">
              <a :href="episode">Episodio {{ index + 1 }}</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const character = ref({});
  const route = useRoute();
  
  onMounted(() => {
    const characterId = route.query.id;
  
    if (characterId) {
      const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          character.value = data;
        })
        .catch(error => {
          console.error("Hubo un problema con la operación fetch:", error);
        });
    }
  });
  
  </script>
  
  <style scoped>
  .columnaslink {
    columns: 2; 
  }
  
  img {
    max-width: 200px;
  }
  
  
 
  </style>
  