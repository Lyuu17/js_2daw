
function miFunc() {
    this.test = "test";
    return "Hola";
}

const nuevaFunc = new(miFunc);
console.log(nuevaFunc);

// -------------------------

const miFunc2 = () => {
    this.test = "test";
    return "Hola";
}

miFunc2();
console.log(miFunc2);