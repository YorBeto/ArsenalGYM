<template>
    <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
      <v-app-bar color="black" style="height: 70px; font-size: 24px; display: flex; align-items: center;">
        <v-img
          src="/arsenal.png"
          alt="Logo"
          contain
          class="imagen-izquierda"
        ></v-img>
        <v-spacer></v-spacer>
        <div class="nav-buttons">
          <router-link to="/"><v-btn class="boton-bar">INICIO</v-btn></router-link>
          <v-btn class="boton-bar">INBODY</v-btn>
          <v-btn class="boton-bar">PRODUCTOS</v-btn> 
        </div>
        <v-spacer></v-spacer>
      </v-app-bar>
  
      <v-main style="background-color: #f0f0f0; display: flex; justify-content: center; align-items: center;">
        <div class="contenedores">
          <div class="contenedor-izquierda">
            <h2 class="titulo">Iniciar Sesión</h2>
            <div class="contenedor-inputs">
              <div class="item-input">
                <label for="correo">Correo electrónico</label>
                <input id="correo" type="email" class="campo-input">
              </div>
              <div class="item-input">
                <label for="contrasena">Contraseña</label>
                <input id="contrasena" type="password" class="campo-input">
              </div>
              <v-btn class="boton-ingresar">Ingresar</v-btn>
              <v-btn class="boton-google">
                <img src="/google.jpg" alt="Google Icono" class="google-icono">
                Iniciar sesión con Google
              </v-btn>
            </div>
            <a href="#" class="link">¿Has olvidado tu contraseña?</a>
            <a href="#" class="link">¿No estás registrado?</a>
          </div>
          <div class="contenedor-derecha">
            <h2 class="titulo">Team Arsenal</h2>
            <div class="contenedor-inputs">
              <div class="item-input">
                <label for="usuario">Usuario:</label>
                <input id="usuario" type="text" class="campo-input campo-input-derecha">
              </div>
              <div class="item-input">
                <label for="contrasena-derecha">Contraseña:</label>
                <input id="contrasena-derecha" type="password" class="campo-input campo-input-derecha">
              </div>
              <v-btn class="boton-ingresar">Ingresar</v-btn>
            </div>
          </div>
        </div>
      </v-main>
    </v-layout>
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
  
  .titulo {
    text-align: center;
    margin-bottom: 20px;
    color: black;
  }
  
  .contenedores {
    display: flex;
  }
  
  .contenedor-izquierda {
    width: 500px;
    height: 500px;
    background-color: white;
    border: 3px solid black;
    padding: 20px;
    margin-right: -1px; 
    color: black;
  }
  
  .contenedor-derecha {
    width: 500px;
    height: 500px;
    background: linear-gradient(to right, black, red);  
    border: 3px solid black;
    padding: 20px;
    color: white;
    margin-left: -1px; 
  }
  
  .contenedor-inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .item-input {
    display: flex;
    flex-direction: column;
  }
  
  .campo-input {
    margin-top: 5px;
    border: 2px solid black;
    padding: 5px;
    color: black;
  }
  
  .boton-ingresar {
    background: linear-gradient(to right, black, red);
    color: white;
    margin-top: 10px;
    padding: 10px 20px;
  }
  
  .boton-google {
    background-color: white;
    color: black;
    border: 2px solid black;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .google-icono {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
  
  .link {
    display: block;
    margin-top: 10px;
    color: black;
    text-decoration: none;
  }
  
  .campo-input-derecha {
    color: white; 
  }
  
  .campo-input-derecha::placeholder {
    color: white; 
  }
  </style>
  