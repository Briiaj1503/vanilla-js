function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

export function dividir(num1, num2) {
  return num1 / num2;
}


let calculadora = { 
    sumar, restar, multiplicar, dividir
}
export {calculadora};
