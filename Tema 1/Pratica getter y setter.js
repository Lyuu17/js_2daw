class Producto {
    constructor(nombre, unidades, precio) {
        this.nombre = nombre;
        this.unidades = unidades;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    get precioTotal() {
        return this.productos.reduce((prev, cur) => prev + cur.precio * cur.unidades, 0);
    }
}

let carrito = new Carrito();
carrito.productos.push(new Producto("Papel higiénico", 5, 10)); 
carrito.productos.push(new Producto("Leche", 1, 1)); 

console.log(carrito.precioTotal);