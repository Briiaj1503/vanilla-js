function horaactual() {
  let fecha = new Date();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let hora = horas + "." + minutos + "." + segundos;

  document.getElementById("horaActual").textContent = hora;
}
setInterval(horaactual, 1000);
