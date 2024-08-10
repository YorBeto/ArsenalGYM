import { defineStore } from 'pinia';

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    usuarioId: null,
    productos: []
  }),
  actions: {
    setUsuarioId(id) {
      this.usuarioId = id;
    },
    async loadCarrito() {
      try {
        const response = await fetch(`http://mipagina.com/api/carrito/${this.usuarioId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.productos = data.productos;
      } catch (error) {
        console.error('Error loading carrito:', error);
      }
    }
  }
});