// Inserte el código aquí//

import { calculadora } from "./calculadora.js";
function calcular(operacion, n1, n2) {
  let resultado;
  if (operacion === "sumar") {
    resultado = calculadora.sumar(n1, n2);
  } else if (operacion === "restar") {
    resultado = calculadora.restar(n1, n2);
  } else if (operacion === "multiplicar") {
    resultado = calculadora.multiplicar(n1, n2);
  } else if (operacion === "dividir") {
    resultado = calculadora.dividir(n1, n2);
  }
  return resultado;
}
let resultadoTotal = calcular("dividir", 10, 5);
console.log(resultadoTotal);
