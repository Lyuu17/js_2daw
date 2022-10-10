const producto = {
    nombre: "nombre",
    tipo: "tipo",
    caracteristicas: {
        consumo: 0,
        potencia: 0
    }
};

const producto2 = {...producto, nombre: "producto2", caracteristicas: {...producto.caracteristicas, consumo: 250}};

console.log(producto);
console.log(producto2);