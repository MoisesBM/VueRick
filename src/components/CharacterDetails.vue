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
              <a :href="episode" class="episode">Episodio {{ index + 1 }}</a>
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

header {
  background-color: #011034;
  color: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap; 
}

nav li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  transition: background 0.3s ease;
}

nav a:hover {
  background-color: #67b5e6;
  color: #fff;
}

nav a i {
  margin-right: 8px;
}


#charactersContainer {
  display: grid;
  font-weight: bold;
  color: #67b5e7;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  box-sizing: border-box;
}


.character-card {
  border: #67b5e6 5px solid;
  background-color: #172853;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 8px 15px #67b5e6;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
}

.character-card:hover {
  box-shadow: 0px 12px 20px rgba(255, 27, 27, 0.3);
  transform: translateY(-5px);
}

.character-card img {
  width: 150px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  background-color: rgb(255, 255, 255);
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 50px;
  margin: 25px 0;
  padding: 10px 20px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #67b5e6;
  color: white;
}

#characterDetails {
  width: 100%;
  background-color: #172853;
  padding: 10px 0;
  color: #f0f0f0;
  text-align: center;
  margin-top: 20px;
}

#characterDetails img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#capsDetails {
  padding-top: 40px;
  text-align: center;
}

#capsDetails ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}

#capsDetails ul li a {
  display: block;
  padding: 5px 1px;
  background: linear-gradient(135deg, #284eaf, #284eaf);
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#capsDetails ul li a:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

#capsDetails ul li a:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}


@media (max-width: 768px) {
  #charactersContainer {
    grid-template-columns: repeat(2, 1fr);
  }

  nav ul {
    flex-direction: column;
  }

  nav li {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media (max-width: 599px) {
  #charactersContainer {
    grid-template-columns: 1fr;
  }

  #capsDetails ul {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }

  nav ul {
    gap: 10px;
  }

  header {
    padding: 10px;
  }
}

 
  </style>
  