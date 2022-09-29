const func = (posicion, lista) => {
    console.log("Estoy esperando");

    let p = new Promise((resolve, reject) => {
        if (posicion < 0 || posicion >= lista.length)
                return reject("Índice fuera de rango");
        resolve(lista[posicion]);
    });
    p.then((v) => {
        console.log(`Valor: ${v}`);
    })
    .catch((reason) => {
        console.log(`Error: ${reason}`);
    });

    console.log("Estoy esperando");
}

func(1,["hola", "correcto", "posición2"]);

console.log("Estoy esperando");