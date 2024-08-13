// userStore.js
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
      localStorage.removeItem('token'); // Eliminar el token también
    },
    loadUsuario() {
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (usuario) {
        this.setUsuario(usuario);
      }
    },
    setResetToken(token) {
      this.resetToken = token;
      localStorage.setItem('resetToken', token);
    },
    clearResetToken() {
      this.resetToken = null;
      localStorage.removeItem('resetToken');
    },
    loadResetToken() {
      const token = localStorage.getItem('resetToken');
      if (token) {
        this.setResetToken(token);
      }
    },
    setResetTokenExpire(expireDate) {
      this.resetTokenExpire = expireDate;
      localStorage.setItem('resetTokenExpire', expireDate);
    },
    clearResetTokenExpire() {
      this.resetTokenExpire = null;
      localStorage.removeItem('resetTokenExpire');
    },
    loadResetTokenExpire() {
      const expireDate = localStorage.getItem('resetTokenExpire');
      if (expireDate) {
        this.setResetTokenExpire(expireDate);
      }
    }
  }
});
