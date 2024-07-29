// src/stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    usuario: {}
  }),
  actions: {
    setUsuario(data) {
      this.usuario = data;
    },
    clearUsuario() {
      this.usuario = {};
    }
  }
});