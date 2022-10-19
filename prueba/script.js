import * as fs from "fs";

const datos = JSON.parse(fs.readFileSync("datos2.json", "utf8"));

/* El precio total que han pagado los chinos en el año 1993 */
const datosChinos = datos.filter((e) => e.pais == "China" && e.anio_coche == 1993);

const precioTotal = datosChinos.reduce((prev, v) => prev + parseFloat(v.precio_coche.replace("$", "")), 0);
console.log(precioTotal);

/* La cuenta bancaria del propietario con el coche más nuevo de South África */
const datosSudafrica = datos.filter((e) => e.pais == "South Africa");

const cocheMasNuevoSudafrica = datosSudafrica.sort((a, b) => (a.anio_coche == b.anio_coche ? 0 : (a.anio_coche < b.anio_coche ? 1 : -1)));
console.log(cocheMasNuevoSudafrica[0].cuenta_bancaria);