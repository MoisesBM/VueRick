<!-- src/components/InformacionEstudiante.vue -->
<template>
    <div>
      
  
      <main>
        <div class="container">
          <div class="info-container">
            <img src="@/assets/persona.png" alt="usc" />
           <!--<img :src="datos.perfil" alt="persona">-->
            <h2>Información de Desarrollador:</h2>
            <p><span class="desarrollo">Nombre:</span> <span>{{ datos.nombre }}</span></p>
            <p><span class="desarrollo">Carrera:</span> <span>{{ datos.carrera }}</span></p>
            <p><span class="desarrollo">Celular:</span> <span>{{ datos.celular }}</span></p>
            <p><span class="desarrollo">Cédula:</span> <span>{{ datos.id }}</span></p>
            <p><span class="desarrollo">Empresa:</span> <span>{{ datos.trabajo }}</span></p>
            <a :href="`mailto:${datos.email}`" class="contactar-btn">Contactar</a>
          </div>
          <div class="info-container">
            <img src="@/assets/descarga.png" alt="usc" />
            <h2>Universidad Santiago de Cali</h2>
            <p><span class="desarrollo">Facultad de Ingeniería</span></p>
            <p><span class="desarrollo">Curso:</span> Programación Orientada a la Web</p>
            <p><span class="desarrollo">Entrega:</span> 11 / 09 / 24</p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const datos = ref({
    nombre: "Moises Buitrago Mosquera",
    carrera: "Ingeniería de Sistemas",
    celular: "3128724843",
    id: "1006100506",
    trabajo: "Arcos Dorados S.A.S",
    email: "moises.buitrago00@usc.edu.co",
    perfil: "imagenes/persona.png"
  });
  
  // const toggleMenu = () => {
  //   // Implementa la lógica para el menú hamburguesa si es necesario
  // };
  
  onMounted(() => {
    // Aquí puedes agregar lógica adicional si es necesario
  });
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    padding: 30px;
  }
  
  .info-container {
    background-color: #fff;
    border-radius: 10rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    padding: 20px;
    width: 40%;
    margin-bottom: 20px;
    text-align: center;
    border: 10px solid #1f77b4;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .info-container:hover {
    transform: scale(1.05);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .info-container img {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #1f77b4;
    display: block;
  }
  
  .info-container h2 {
    font-size: 28px;
    color: #1f77b4;
    margin-bottom: 5px;
  }
  
  .info-container p {
    font-size: 18px;
    margin: 7px 0;
    color: #555;
  }
  
  .info-container .desarrollo {
    font-weight: bold;
    color: #1f77b4;
  }
  
  .info-container p span {
    font-style: italic;
  }
  
  .contactar-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 25px;
    background-color: #1f77b4;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  
  .contactar-btn:hover {
    background-color: #0d4d6d;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    .info-container {
      width: 90%;
    }
  
    .info-container img {
      width: 120px;
      height: 120px;
    }
  }
  
  @media (max-width: 480px) {
    .info-container {
      width: 100%;
      margin-bottom: 15px;
    }
  }
  </style>
  