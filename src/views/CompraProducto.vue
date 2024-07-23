<template>
    <div class="container">
      <header>
        <h1>PRODUCTOS</h1>
        <nav>
          <ul>
            <li><a href="#">INICIAR SESIÓN</a></li>
          </ul>
        </nav>
      </header>
      <section class="mensaje">
        <p>¡GRACIAS POR SU COMPRA!</p>
        <img class="regalo-img" src="@/assets/regalo.jpg" alt="Imagen de regalo">
        <p>Ha comprado un suplemento “EVP-3D Non-Stim Pre-Workout”. Gracias por su preferencia.</p>
      </section>
      <section class="acciones">
        <button @click="seguirComprando">SEGUIR COMPRANDO</button>
        <button @click="imprimirRecibo">IMPRIMIR RECIBO</button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      seguirComprando() {
        console.log('Continuar comprando');
      },
      imprimirRecibo() {
        console.log('Imprimir recibo');
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  header h1 {
    font-size: 24px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline;
    margin-left: 20px;
  }
  
  .mensaje {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
  
  .producto-img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .acciones {
    text-align: center;
  }
  
  .acciones button {
    padding: 10px 20px;
    font-size: 16px;
    margin: 0 10px;
  }
  </style>
  