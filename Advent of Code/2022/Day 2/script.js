const fs = require("fs");

const
    INVALID = -1,
    ROCK = 0,
    PAPER = 1,
    SCISSOR = 2;

const columnas = {
    "A": ROCK,
    "B": PAPER,
    "C": SCISSOR,

    "X": ROCK,
    "Y": PAPER,
    "Z": SCISSOR
};

const opciones_ganadoras = [
    // rock
    [
        INVALID, // rock
        PAPER, // paper
        ROCK, // scissor
    ],
    // paper
    [
        PAPER, // rock
        INVALID, // paper
        SCISSOR, // scissor
    ],
    // scissor
    [
        ROCK, // rock
        SCISSOR, // paper
        INVALID // scissor
    ]
]

let puntos = 0;

const proc = (a, b) => {
    let 
        a_num = columnas[a],
        b_num = columnas[b];

    let v = opciones_ganadoras[a_num][b_num];

    if (v == INVALID)
        puntos += ++b_num + 3;
    else if (v == a_num)
        puntos += ++b_num;
    else if (v == b_num)
        puntos += ++b_num + 6;
}

const input = fs.readFileSync("./input.txt", { "encoding": "utf8" })
    .trim()
    .split("\n")
    .forEach(v => {
        proc(v[0], v[2]);
    });

console.log(puntos);