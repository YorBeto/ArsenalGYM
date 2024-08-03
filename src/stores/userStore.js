

// stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    usuario: null,
    nombre: '', // Agrega un campo para el nombre
  }),
  actions: {
    setUsuario(user) {
      this.usuario = user;
      this.nombre = user.nombre; // Asegúrate de que el nombre esté en la respuesta del login
    }
  }
});