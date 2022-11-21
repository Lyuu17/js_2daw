/** ej1 */

const lista = [[3,4,5],23,[4,5,6,7]];

const nuevaLista = JSON.parse(`[${JSON.stringify(lista).replaceAll("[", "").replaceAll("]", "")}]`);
const listaOrdenada = nuevaLista.sort((a, b) => a - b);

const 
    minimo = listaOrdenada[0],
    maximo = listaOrdenada[listaOrdenada.length - 1];

console.log(minimo, maximo);

/** ej2 */

const Entrada =  [[18, 10], [45, 2], [61, 6], [37, 5], [21, 7], [17, 9]]
const Salida = ["Senior","Junior", "Junior", "Junior", "Senior", "Junior"]

const func = (entrada) => {
    const 
        edad_minima = 18,
        nota_minima = 7;

    return entrada.map(v => v = (v[0] < edad_minima || v[1] < nota_minima) ? "Junior" : "Senior");
}

console.log(func(Entrada));

/** ej3 */
const multiply = (a, b) => a*b;

/** ej4 */
const final = (str, ending) => str.endsWith(ending);