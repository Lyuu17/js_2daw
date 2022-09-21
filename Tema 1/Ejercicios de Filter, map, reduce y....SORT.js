const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];

// 1
console.log("ejercicio 1");

const ej1 = (lista, tipo) => lista.filter(v => v.tipo == tipo);
console.log(ej1(superHeroes, "DC"));

// 2
console.log("ejercicio 2");

console.log(superHeroes.filter(v => v.tipo == "DC").map(v => v.nombre = `CAMBIADO ${v.nombre}`));

// 3
console.log("ejercicio 3");

console.log(superHeroes.filter(v => v.tipo == "DC").reduce((prev, v) => prev + 1, 0))

// 4
console.log("ejercicio 4");

const superHeroes2 = [ 
	'{"nombre":"Batman", "tipo":"DC"}',
	'{"nombre":"Linterna Verde", "tipo":"DC"}',
	'{"nombre":"Lobezno", "tipo":"Marvel"}',
	'{"nombre":"Spiderman", "tipo":"Marvel"}',
	];

    // a)
    console.log(superHeroes2.map(v => JSON.parse(v)));
    // b)
    console.log(superHeroes2.map(v => JSON.parse(v)).filter(v => v.tipo == "Marvel"));

// 5
console.log("ejercicio 5");

superHeroes.push({ nombre: "Black Widow", tipo: "Marvel"});
superHeroes.push({ nombre: "A", tipo: "DC"});

console.log(superHeroes);

// 6
console.log("ejercicio 6");

superHeroes.unshift({ nombre: "BBBBBBBBBBBBBBBB", tipo: "Marvel"});
superHeroes.unshift({ nombre: "CCCCCCCCCCCCCCCC", tipo: "DC"});

console.log(superHeroes);

// 7
console.log("ejercicio 7");

console.log(superHeroes.sort((a, b) => a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())));

// 8
console.log("ejercicio 8");

console.log(superHeroes.sort((a, b) => a.tipo.toLowerCase().localeCompare(b.tipo.toLowerCase())));

// 9
console.log("ejercicio 9");

console.log(superHeroes.map(v => v.nombre));

// 10
console.log("ejercicio 10");

console.log(superHeroes.map(v => v = { nombre: v.nombre } ));
