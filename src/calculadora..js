export function sumar(num1, num2) {
  return num1 + num2;
}

export function multiplicar(num1, num2) {
  return num1 * num2;
}

function numerosPares(numeroActual) {
  return numeroActual % 2 == 0;
}

export function filtroPares(listaNumeros) {
  let filtrados = listaNumeros.filter(numerosPares);
  return filtrados;
  //return listaNumeros.filter(numerosPares)
}

filtroPares([1, 2, 3, 4]);

export function restar(num1, num2) {
  return num1 - num2;
}

export function dividir(num1, num2) {
  return num1 / num2;
}

function numerosDivisibles(numeroActual) {
  return numeroActual % 5 == 0;
}

export function filtroDivisibles(lista) {
  let filtrados = lista.filter(numerosDivisibles);
  return filtrados;
  //return listaNumeros.filter(numerosPares)
}

let valores = filtroDivisibles([5, 20, 50, 25]);
console.log(valores);


