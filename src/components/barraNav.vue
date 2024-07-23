    <template>
 <v-app-bar color="black" app style="height: 70px; font-size: 24px; display: flex; align-items: center;">
      <v-img src="/public/arsenal.png" alt="Logo" contain class="imagen-izquierda"></v-img>
      <v-spacer></v-spacer>
      <div class="nav-buttons">
        <router-link to="/"><v-btn class="boton-bar">INICIO</v-btn></router-link>
        <router-link to="/Producto"><v-btn class="boton-bar">PRODUCTOS</v-btn></router-link>
        <router-link to="Inbody"><v-btn class="boton-bar">INBODY</v-btn></router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link to="/Login"><v-btn class="boton-bar boton-iniciar-sesion">Iniciar Sesion</v-btn></router-link>
    </v-app-bar>
</template>

<style scoped>
.boton-bar {
  color: white;
  text-transform: none;
}
</style>

<style scoped>
.imagen-izquierda {
  height: 100px;
  width: 100px;
  margin-left: 20px;
}

.nav-buttons {
  display: flex;
  gap: 16px; /* Espaciado uniforme entre botones */
  justify-content: center;
  align-items: center;
}

.boton-bar {
  color: white;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  min-width: 120px; /* Ancho mínimo para los botones */
  text-align: center;
}

.boton-iniciar-sesion {
  margin-right: 40px;
}
</style>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>