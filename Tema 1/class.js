class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
console.log(killerRabbit);
killerRabbit.speak("asd");

let blackRabbit = new Rabbit("black");
blackRabbit.speak("aaaaaaaaaaaaaaaa");


class Alumno {
    constructor(nombre, ape, nota) {
        this.nombre = nombre;
        this.apellido = ape;
        this.nota = nota;
    }

    ponerNota(nota) {
        this.nota = nota;
    }

    mostrarNota() {
        console.log(`${this.nombre} ${this.apellido} tiene ${this.nota} de nota`);
    }
}

class Profe {
    cambiarNota(alumno, nota) {
        alumno.ponerNota(nota);
    }
}

let alumno1 = new Alumno("Nombre", "Apellido", 0);
alumno1.mostrarNota();
alumno1.ponerNota(5);
alumno1.mostrarNota();

let profe1 = new Profe();
profe1.cambiarNota(alumno1, 10);

alumno1.mostrarNota();