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

    set añade(v) {
        this.productos = v;
    }
}

let carrito = new Carrito();
carrito.añade = [...carrito.productos, new Producto("Papel higiénico", 5, 10)];
carrito.añade = [...carrito.productos, new Producto("Leche", 1, 1)];

console.log(carrito.precioTotal);