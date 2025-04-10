const inicioRelacion = new Date("2022-07-31T13:12:00"); // Cambia esta fecha
const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date();
  const diff = ahora - inicioRelacion;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const anos = Math.floor(dias / 365);
  const diasRestantes = dias % 365;
  const horasRestantes = horas % 24;
  const minutosRestantes = minutos % 60;
  const segundosRestantes = segundos % 60;

  contador.textContent = `${anos} anos, ${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}

setInterval(actualizarContador, 1000);
