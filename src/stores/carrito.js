import { defineStore } from 'pinia';

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    productos: [],
  }),
  actions: {
// En tu store de carrito
addProducto(producto) {
  const existingProduct = this.productos.find(p => p.ID_PRODUCTO === producto.ID_PRODUCTO);
  if (existingProduct) {
    existingProduct.cantidad += 1; // Aumenta la cantidad si ya está en el carrito
  } else {
    this.productos.push({ ...producto, cantidad: 1 }); // Agrega el producto con cantidad inicial
  }
}
,
    removeProducto(ID_PRODUCTO) {
      const productIndex = this.productos.findIndex(p => p.ID_PRODUCTO === ID_PRODUCTO);
      if (productIndex !== -1) {
        this.productos.splice(productIndex, 1);
      }
    },
    clearCarrito() {
      this.productos = [];
    },
    
  },
});