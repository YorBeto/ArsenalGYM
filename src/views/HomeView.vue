<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <v-app-bar color="black" style="height: 70px; font-size: 24px; display: flex; align-items: center;">
      <v-img

        src="/public/arsenal.png"
        alt="Logo"
        contain
        class="imagen-izquierda"
      ></v-img>
      <v-spacer></v-spacer>
      <div class="nav-buttons">
        <v-btn class="boton-bar">INICIO</v-btn>
        <router-link to="/"><v-btn class="boton-bar">INICIO</v-btn></router-link>
        <v-btn class="boton-bar">INBODY</v-btn>
        <v-btn class="boton-bar">PRODUCTOS</v-btn>
        <v-btn class="boton-bar">INBODY</v-btn>
      </div>
      <v-spacer></v-spacer>
      <router-link to="Login"><v-btn class="boton-bar boton-iniciar-sesion">Iniciar Sesion</v-btn></router-link>
    </v-app-bar>

    <v-main style="background-color: #f0f0f0; display: flex; flex-direction: column; align-items: center;">
      <v-img src="/public/fondo.jpg" alt="Gym Image" class="imagen-gym"></v-img>

      <div class="contenido-abajo">
        <div class="inbody-section">
          <v-img src="/public/INB270.png" alt="InBody Image" class="imagen-inbody"></v-img>
          <div class="inbody-text"> 
            <h2>EN ARSENAL NOS INTERESA TU SALUD</h2>
            <p>Conoce tu cuerpo con nuestro InBody, una máquina capaz de medir las características de tu cuerpo. Agenda tu cita para descubrir tus límites.</p>
            <v-btn class="boton-agendar">AGENDAR</v-btn>
          </div>
        </div>
        <div class="gym-section">
          <v-img src="/public/Avina.jpg" alt="Arsenal Image" class="imagen-arsenal"></v-img>
          <div class="gym-text">
            <p>En Arsenal somos un gimnasio que busca el bienestar de nuestros socios como también superar sus límites. Ofrecemos variedad de equipo, instructores y también contamos con clases de crossfit.</p>
          </div>
        </div>
        
        <!-- Sección de Membresías -->
        <div class="membresias-section">
          <h2>MEMBRESÍAS</h2>
          <div class="membresias-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>MENSUAL</th>
                  <th>SEMESTRAL</th>
                  <th>ANUAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GYM</td>
                  <td>$700</td>
                  <td>$1,800</td>
                  <td>$7,460</td>
                </tr>
                <tr>
                  <td>CROSSFIT</td>
                  <td>$720</td>
                  <td>$1,920</td>
                  <td>$7,550</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Sección de Visítanos -->
        <div class="visitanos-section">
          <h2>VISÍTANOS</h2>
          <div class="visitanos-content">
            <v-img src="/map.png" alt="Mapa" class="imagen-mapa"></v-img>
            <v-img src="/arsenal-gym.png" alt="Arsenal Gym" class="imagen-arsenal-gym"></v-img>
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
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 50%;
}

.boton-bar {
  color: white;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
