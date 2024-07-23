<template>
<div><h1>Vista</h1></div>
</template>
    
  
  <style scoped>
  .imagen-izquierda {
    height: 50px;
    width: 100px;
    margin-left: 20px;
  }
  
  .nav-buttons {
    display: flex;
    justify-content: center;
    width: 50%;
  }
  
  .boton-bar {
    color: white;
    font-size: 20px;
  }
  
  .boton-iniciar-sesion {
    margin-right: 40px; /* Ajusta este valor para mover el botón a la izquierda */
  }
  
  .imagen-gym {
    width: 100%;
    height: auto;
  }
  
  .contenido-abajo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
  }
  
  .inbody-section, .gym-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
    background-color: white;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .imagen-inbody, .imagen-arsenal {
    width: 30%;
    height: auto;
  }
  
  .inbody-text, .gym-text {
    width: 65%;
    padding: 20px;
  }
  
  .boton-agendar {
    margin-top: 10px;
    background-color: #d32f2f;
    color: white;
  }
  
  /* Estilos para la sección de Membresías */
  .membresias-section {
    width: 100%;
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .membresias-table table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    color: black;
  }
  
  .membresias-table th, .membresias-table td {
    border: 1px solid black;
    padding: 10px;
    color: white;
  }
  
  .membresias-table th {
    background-color: black;
  }
  
  .membresias-table td {
    background-color: white;
    color: black;
  }
  
  /* Estilos para la sección de Visítanos */
  .visitanos-section {
    width: 100%;
    background-color: white;
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .visitanos-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  
  .imagen-mapa, .imagen-arsenal-gym {
    width: 48%;
    height: auto;
  }
  </style>
  