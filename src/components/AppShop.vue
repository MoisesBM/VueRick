<template>
        <div>
      <main>
        <div class="container">
          <div class="info-container">
            <img :src="datos.perfil" alt="persona" />
            <h2>Información de Desarrollador:</h2>
            <p><span class="desarrollo">Nombre:</span> <span>{{ datos.nombre }}</span></p>
            <p><span class="desarrollo">Carrera:</span> <span>{{ datos.carrera }}</span></p>
            <p><span class="desarrollo">Celular:</span> <span>{{ datos.celular }}</span></p>
            <p><span class="desarrollo">Cédula:</span> <span>{{ datos.id }}</span></p>
            <p><span class="desarrollo">Empresa:</span> <span>{{ datos.trabajo }}</span></p>
            <a :href="`mailto:${datos.email}`" class="contactar-btn">Contactar</a>
          </div>
          <div class="info-container">
            <img src="@/assets/rick.jpg" alt="usc" />
            <h2>Universidad Santiago de Cali</h2>
            <p><span class="desarrollo">Facultad de Ingeniería</span></p>
            <p><span class="desarrollo">Curso:</span> Programación Orientada a la Web</p>
            <p><span class="desarrollo">Entrega:</span> 11 / 09 / 24</p>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
  
  export default {
        name: 'AppShop', // Rename the component
    };

</script>
