// Inserte el código aquí
function actualhour() {
  let fecha = new Date();
  let horas = fecha.getHours();
  let minuto = fecha.getMinutes();
  let segundo = fecha.getSeconds();
  let hora = horas + " . " + minuto + " . " + segundo;

  document.getElementById("horaActual").textContent = hora;
}

setInterval(actualhour, 1000);

// obtener usuarios
obtenerListaUsuarios();

function obtenerListaUsuarios() {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("Lista de usuarios:", data);
    })
    .catch((error) => {
      console.log("Error al obtener la lista de usuarios", error);
    });

  function usuarios() {
    return new Promise(obtenerListaUsuarios);
  }
}

async function datoUsuario() {
  const datosdelUsuario = await obtenerListaUsuarios();
  console.log(datosdelUsuario);
}
datosUsuarios();
