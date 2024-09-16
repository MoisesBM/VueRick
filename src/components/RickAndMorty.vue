<!-- src/components/RickAndMorty.vue -->
<template>
    <div>
      <!-- <header>
        <h1 style="color: #67b5e6;">Rick And Morty</h1>
        <nav>
          <ul>
            <li><a href="#"><i class="fas fa-home"></i>Inicio</a></li>
            <li><a href="shop.html"><i class="fas fa-store"></i>Shop</a></li>
            <li><a href="infojson.html"><i class="fa-sharp-duotone fa-solid fa-circle-exclamation"></i>Informacion</a></li>
            <div class="menu-hamburger" @click="toggleMenu">
              <i class="fas fa-bars"></i>
            </div>
          </ul>
        </nav>
      </header> -->
      <main>
        <section id="inicio">
          <div id="charactersContainer" class="characters-container">
            <div v-for="character in characters" :key="character.id" class="character-card">
              <img :src="character.image" alt="Character Image" />
              <p>{{ character.name }}</p>
              <p>{{ character.status }}</p>
              <p>{{ character.gender }}</p>
              <p>{{ character.species }}</p>
              <a :href="`/CharacterDetails?id=${character.id}`" class="btn">DETALLES</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue';
  
    const apiUrl = "https://rickandmortyapi.com/api/character";
    const characters = ref([]);
  
    const getFilesFromApi = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        characters.value = data.results;
      } catch (error) {
        console.error("Hubo un problema con la operación fetch:", error);
      }
    };
  
    onMounted(() => {
      getFilesFromApi();
    });
  
    // const toggleMenu = () => {
    //   // Menu hamburguesa, proximamente se implementara
    // };
  </script>
  
  <style scoped>
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
    }
  
    nav li {
      display: inline;
      margin-right: 20px;
    }
  
    nav ul li:hover {
      background: #444;
    }
  
    nav {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
  
    #charactersContainer {
      display: grid;
      font-weight: bold;
      color: #67b5e7;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      width: 2000px;
      max-width: 100%;
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
      box-shadow: 0px 8px 15px 67b5e6;
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
      grid-template-columns: repeat(8, 2fr);
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
  
    nav a i {
      margin-right: 8px;
    }
  
    #capsDetails ul li a:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  
    #capsDetails ul li a:active {
      transform: scale(0.98);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    @media (max-width: 600px) {
      #charactersContainer {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
    }
  </style>
  