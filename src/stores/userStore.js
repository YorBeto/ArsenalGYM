import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    usuario: null
  }),
  actions: {
    setUsuario(data) {
      this.usuario = data;
    },
    clearUsuario() {
      this.usuario = null;
    }
  }
});
