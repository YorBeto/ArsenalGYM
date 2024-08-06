// src/stores/carrito.js
import { defineStore } from 'pinia';

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    productos: [],
  }),
  actions: {
    addProducto(producto) {
      const existingProduct = this.productos.find(p => p.ID_PRODUCTO === producto.ID_PRODUCTO);
      if (existingProduct) {
        existingProduct.cantidad++;
      } else {
        this.productos.push({ ...producto, cantidad: 1 });
      }
    },
    removeProducto(ID_PRODUCTO) {
      this.productos = this.productos.filter(p => p.ID_PRODUCTO !== ID_PRODUCTO);
    },
    clearCarrito() {
      this.productos = [];
    },
  },
});
