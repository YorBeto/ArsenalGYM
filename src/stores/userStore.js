import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    usuario: JSON.parse(localStorage.getItem('usuario')) || null,
    // Agregar nuevo estado si es necesario
    resetToken: null,
    resetTokenExpire: null,
  }),
  actions: {
    setUsuario(usuario) {
      this.usuario = usuario;
      localStorage.setItem('usuario', JSON.stringify(usuario));
    },
    clearUsuario() {
      this.usuario = null;
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
    },
    loadUsuario() {
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (usuario) {
        this.setUsuario(usuario);
      }
    }
  }
});
