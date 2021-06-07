import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";


let impuestos1 = new Impuestos(950000,300000);
let impuestos2= new Impuestos (800000, 250000);


impuestos1.monto_bruto_anual = 750000;
impuestos1.deducciones = 150000;


let cliente1 = new Cliente("Alejandro Ramos",impuestos1);
let cliente2= new Cliente("Bruce Wayne", impuestos2);

cliente1.nombre = "Andrea Echeverri";
cliente2.nombre= "Bob Marley"

/// Resultados de getter en consola
console.log(`Nombre del cliente: ${cliente1.nombre}`);
console.log(`Monto Bruto Anual: ${impuestos1.monto_bruto_anual}`);
console.log(`Deducciones: ${impuestos1.deducciones}`);

console.log(`Impuesto a pagar: ${cliente1.calcularImpuesto(impuestos1.monto_bruto_anual,impuestos1.deducciones)}`);

console.log(`Nombre del cliente: ${cliente2.nombre}`);
console.log(`Monto Bruto Anual: ${impuestos2.monto_bruto_anual}`);
console.log(`Deducciones: ${impuestos2.deducciones}`);

console.log(`Impuesto a pagar: ${cliente2.calcularImpuesto(impuestos2.monto_bruto_anual,impuestos1.deducciones)}`);