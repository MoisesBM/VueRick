<template>

    <header>
        <h1>Rick And Morty</h1>
        <nav>
          <ul>
            <li><a href="/"><i class="fas fa-home"></i>Inicio</a></li>
            <li><a href="/shop"><i class="fas fa-store"></i>Shop</a></li>
            <li><a href="/info"><i class="fa-sharp-duotone fa-solid fa-circle-exclamation"></i>Informacion</a></li>
            <div class="menu-hamburger" id="menuToggle">
              <i class="fa-solid fa-burger"></i>
            </div>
          </ul>
        </nav>
    </header>
    
</template>

<script>
  
  export default {
        name: 'AppNavegador', 
    };

</script>

<style scoped>

  header {
    background-color: #012a4a;
    color: #fff;
    padding: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  header h1 {
    margin: 0;
    font-size: 2.5em;
    color: #1f77b4;
  }
  
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    flex-wrap: wrap;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  
  nav li {
    margin: 0 10px;
  }
  
  nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 12px 20px;
    border-radius: 20px;
    transition: background 0.3s ease, transform 0.2s ease;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  nav a i {
    margin-right: 8px;
  }
  
  nav a:hover {
    background-color: #1f77b4;
    color: #fff;
    transform: scale(1.05);
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

@media (max-width: 900px) {
    .menuToggle {
        display: block; 
    }
}
  </style>