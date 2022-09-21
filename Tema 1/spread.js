const persona = {
    nombre: "Pedro",
    apellidos: "Pereda Mellado",
    edad: 53,
    profesion: "Informatico",
};

let persona2 = {nombre, apellidos, ...otrosDatos} = persona;
persona2.nombre = "AAAAAAAAAAA"
console.log(persona.nombre, persona2.nombre, apellidos, otrosDatos);