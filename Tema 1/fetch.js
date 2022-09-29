
const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];


const func = (lista, tipo, tiempo = 2000) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let arr = lista.filter((v) => v.tipo == tipo);
            if (arr.length == 0)
                return reject(new Error(`Error: tipo inválido -> ${tipo}`));
            resolve(arr);
        }, tiempo);
    })
    .then((v) => console.log(v))
    .catch((v) => console.log(v));
}

func(superHeroes, "DC2");